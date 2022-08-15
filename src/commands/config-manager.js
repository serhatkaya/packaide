'use strict';
import chalk from 'chalk';
import { mergePath, getExampleCfg, parseConfig, getProp, assignProp } from '../utils/helper.js';
import fs from 'fs';
import yesno from '../utils/yesno.js';

const cfgPath = mergePath('.packaide.json');

export function defaultCfg() {
  const cfg = getExampleCfg();
  if (fs.existsSync(cfgPath)) {
    console.log(chalk.yellow('.packaide.json already exists in your project root folder.'));
    yesno({
      question: `${chalk.green('Do you want to override current config?')} ${chalk.green.bold(
        '[y/n]:'
      )}`,
    }).then((r) => {
      if (r) {
        writeCfg(cfgPath, cfg);
      }
    });
  } else {
    writeCfg(cfgPath, cfg);
  }
}

export function setProperty(key, value) {
  let cfg = parseConfig();

  let propVal = getProp(cfg, key);
  let err = 0;

  try {
    if (Array.isArray(propVal)) {
      propVal = value.split(',');
    } else if (typeof propVal == 'boolean') {
      propVal = value == 'true';
    } else if (typeof propVal == 'number') {
      if (isNaN(Number(value))) {
        console.log(chalk.red('Please provide valid number.'));
        err = 1;
      } else {
        propVal = Number(value);
      }
    } else if (typeof propVal == 'string') {
      propVal = value;
    }
  } catch (error) {
    console.log(error);
    err = 1;
  }

  if (err < 1) {
    assignProp(cfg, key, propVal);
    writeCfg(cfgPath, cfg, false);
    console.log(chalk.green('Config file updated.'));
  } else {
    console.log(chalk.red.bold('Unexpected error occurred please check your inputs.'));
  }
}

function writeCfg(path, cfg, msg = true) {
  let data = JSON.stringify(cfg);

  fs.writeFileSync(path, data);
  if (msg) {
    console.log(chalk.green('.packaide.json copied in your project`s root folder.'));
  }
}
