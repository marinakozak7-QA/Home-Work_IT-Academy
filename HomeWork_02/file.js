const fsExtra = require('fs-extra');

fsExtra.mkdirpSync('folder_01');
fsExtra.ensureFileSync("folder_01/file.txt");
fsExtra.mkdirpSync('folder_02');
fsExtra.moveSync("folder_01/file.txt", "folder_02/file.txt");
fsExtra.mkdirpSync('folder_03');
fsExtra.copySync("folder_02/file.txt", "folder_03/file.txt");
fsExtra.removeSync("folder_02/file.txt");
fsExtra.removeSync("folder_03/file.txt");
fsExtra.removeSync("folder_01")
fsExtra.removeSync("folder_02")
fsExtra.removeSync("folder_03")