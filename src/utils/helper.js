import fs from 'fs';
import chalk from 'chalk';

export function parseConfig() {
  let obj = getExampleCfg();
  try {
    obj = JSON.parse(fs.readFileSync(`${getWorkingDir()}/.packaide.json`, 'utf8'));
  } catch {
    console.log(chalk.yellow('.packaide.json not found.'));
    console.log(
      chalk.blue(
        'packaide will run with example config which is has no effects when you run package/upload command.'
      )
    );
  }
  return obj;
}

export function getWorkingDir() {
  return process.cwd();
}

export function mergePath(path) {
  return `${getWorkingDir()}/${path}`;
}

export function getExampleCfg() {
  return {
    outputPath: 'release',
    folders: [],
    archiveAfterCopy: false,
    archiveName: 'packaide-release',
    files: [],
    ftp: {
      server: '127.0.0.1',
      username: 'ftpacc',
      password: 'S3CR3TP455W04RD',
      sftp: false,
      port: 21,
      deleteRemote: false,
      include: ['*', '**/*'],
      exclude: [],
      forcePassiveMode: true,
      remoteRoot: '/remote-path',
    },
  };
}

export function getProp(obj, string) {
  string = string.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  string = string.replace(/^\./, ''); // strip a leading dot
  var a = string.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }
  return obj;
}

export function assignProp(obj, prop, value) {
  if (typeof prop === 'string') prop = prop.split('.');

  if (prop.length > 1) {
    var e = prop.shift();
    assignProp(
      (obj[e] = Object.prototype.toString.call(obj[e]) === '[object Object]' ? obj[e] : {}),
      prop,
      value
    );
  } else obj[prop[0]] = value;
}
