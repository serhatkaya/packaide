'use strict';
import chalk from 'chalk';
import FtpDeploy from 'ftp-deploy';
import { mergePath } from '../utils/helper.js';

export function upload() {
  const outputPath = mergePath(c_config.outputPath);
  beginUpload(outputPath);
}

async function beginUpload(outputPath) {
  const cfg = {
    user: c_config.ftp.username,
    password: c_config.ftp.password,
    host: c_config.ftp.server,
    port: c_config.ftp.port,
    localRoot: outputPath.replace(/\\/g, '/'),
    remoteRoot: c_config.ftp.remoteRoot,
    include: c_config.ftp.include,
    exclude: c_config.ftp.exclude,
    deleteRemote: c_config.ftp.deleteRemote,
    forcePasv: c_config.ftp.forcePassiveMode,
    sftp: c_config.ftp.sftp,
  };

  const ftpDeploy = new FtpDeploy();

  const log = console.log;

  ftpDeploy.deploy(cfg, function (err, res) {
    if (err) {
      log(chalk.red(err));
    } else {
      log(chalk.green.bold('================> Completed <==============='));

      log(chalk.green(`All files uploaded`));
    }
  });

  ftpDeploy.on('uploading', function (data) {
    log(chalk.green(`Uploading: ${data.filename}`));
  });

  ftpDeploy.on('uploaded', function (data) {
    log(chalk.blue.bold(`Uploaded: ${data.filename}`));
    log(chalk.cyan(`Remaining files: ${data.totalFilesCount - data.transferredFileCount}`));
  });

  ftpDeploy.on('log', function (data) {
    if (!data.includes('Files found to upload:')) {
      log(chalk.green(data));
      log(chalk.green.bold('============> Server Message End <=========='));
    }
  });
}
