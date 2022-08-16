#! /usr/bin/env node

'use strict';
import { program, Argument, Option, Help } from 'commander';
import { defaultCfg, setProperty } from './commands/config-manager.js';
import { copyFiles } from './commands/package.js';
import { parseConfig } from './utils/helper.js';
import { upload } from './commands/uploadPackage.js';
import chalk from 'chalk';

global.c_config = parseConfig();

console.log(
  chalk.green(` 
                   _         _     _      
                  | |       (_)   | |     
  _ __   __ _  ___| | ____ _ _  __| | ___ 
 | '_ \\ / _\` |/ __| |/ / _\` | |/ _\` |/ _ \\
 | |_) | (_| | (__|   < (_| | | (_| |  __/
 | .__/ \\__,_|\\___|_|\\_\\__,_|_|\\__,_|\\___|
 | |                                      
 |_|   
`)
);

console.log(chalk.green.underline('https://github.com/serhatkaya/packaide\n'));

program
  .command('config')
  .description('Config manager')
  .addOption(
    new Option('-s, --set <key> <value>', 'set value of given property key').choices([
      'outputPath',
      'folders',
      'archiveAfterCopy',
      'archiveName',
      'files',
      'ftp.server',
      'ftp.username',
      'ftp.password',
      'ftp.sftp',
      'ftp.port',
      'ftp.deleteRemote',
      'ftp.include',
      'ftp.exclude',
      'ftp.forcePassiveMode',
      'ftp.remoteRoot',
    ])
  )
  .option('-dc, --default-config', 'Copy default config to the project root folder')
  .action((str, options) => {
    if (Object.keys(str).length < 1) {
      console.log('run ' + chalk.green('packaide config -h') + ' for help.');
    }
    // console.log(options);
    // console.log(options);
    if (str.defaultConfig) {
      defaultCfg.call();
    } else if (str.set) {
      // console.log(str.set);
      // console.log(options.args);
      // const opts = program.opts();
      // const limit = opts.first ? 1 : undefined;
      // console.log(program.args[0].split(opts.separator, limit));

      setProperty(str.set, options.args[0]);
    }
  });

program
  .command('copy')
  .description('Copy files defined in .packaide.json config.')
  .action(copyFiles);

program.command('upload').description('Upload packaged files to server through FTP').action(upload);
program.parse();
