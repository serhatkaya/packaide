'use strict';
import chalk from 'chalk';
import fse from 'fs-extra';
import fs from 'fs';
import { mergePath } from '../utils/helper.js';
import archiver from 'archiver';
import { allProgress } from '../utils/promise-util.js';

export function copyFiles() {
  const outputPath = mergePath(c_config.outputPath);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, 744);
    logicTrigger(outputPath);
  } else {
    fse.emptyDir(outputPath).then((r) => {
      logicTrigger(outputPath);
    });
  }
}

function doLogic(outputPath) {
  return new Promise((resolve, reject) => {
    const promiseFolders = [];

    c_config.folders.forEach((folder) => {
      promiseFolders.push(
        fse.copy(
          mergePath(folder).replace(/\\/g, '/'),
          `${outputPath}/${folder}`.replace(/\\/g, '/')
        )
      );
    });

    const promiseFiles = [];
    c_config.files.forEach((file) => {
      promiseFiles.push(fse.copy(mergePath(file), `${outputPath}/${file}`));
    });

    const combinePromises = [];
    promiseFiles.forEach((r) => combinePromises.push(r));
    promiseFolders.forEach((r) => combinePromises.push(r));

    allProgress(combinePromises, (r) => {
      console.log(chalk.blue.bold(`Packaging progress: ${r.toFixed(2)}%`));
    }).then(() => resolve('File & folders copied successfully!'));
  });
}

function logicTrigger(outputPath) {
  doLogic(outputPath).then((r) => {
    console.log(chalk.green.bold(r));
    if (c_config.archiveAfterCopy) {
      console.log(chalk.green('Archive option setted true, archiving the package.'));
      const archive = archiver('zip', {
        zlib: { level: 9 }, // Sets the compression level.
      });
      const zipName = c_config.archiveName ? `${c_config.archiveName}.zip` : 'packaide-release.zip';
      var output = fs.createWriteStream(zipName);

      output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
      });

      archive.on('error', function (err) {
        throw err;
      });

      archive.pipe(output);

      // append files from a sub-directory, putting its contents at the root of archive
      archive.directory(outputPath + '/', false);
      archive.finalize().then(() => {
        console.log(
          chalk.blue.bold("Package archived, check your project's root directory for"),
          chalk.yellow.bold(zipName)
        );
      });
    }
  });
}
