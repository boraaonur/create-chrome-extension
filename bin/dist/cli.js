#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What project name do you want to use? ", (answer) => {
    const userProjectDir = answer.trim();
    const repoName = "create-chrome-extension";
    const createDirCommand = `mkdir ${userProjectDir}`;
    const gitCheckoutCommand = `cd ${userProjectDir} && git clone --depth 1 https://github.com/boraaonur/create-chrome-extension`;
    (0, utils_1.runCommand)(createDirCommand);
    (0, utils_1.runCommand)(gitCheckoutCommand);
    // Move the contents of the cloned directory to the user's specified directory
    const sourcePath = path_1.default.join(userProjectDir, repoName);
    const destPath = userProjectDir;
    fs_1.default.readdirSync(sourcePath).forEach((file) => {
        fs_1.default.renameSync(path_1.default.join(sourcePath, file), path_1.default.join(destPath, file));
    });
    // Remove the empty 'create-chrome-extension' directory
    fs_1.default.rmdirSync(sourcePath);
    // Clean unnecessary files and folders
    console.log("Cleaning...");
    (0, utils_1.runCommand)(`rm -rf ${userProjectDir}/bin`);
    (0, utils_1.runCommand)(`rm ${userProjectDir}/README.md`);
    // runCommand(`rm ${userProjectDir}/package-lock.json`);
    // Change name in package.json aswell
    (0, utils_1.updatePackageJson)(userProjectDir);
    // Installing dependencies
    console.log("Installing dependencies...");
    (0, utils_1.runCommand)(`cd ${userProjectDir} && npm install`);
    console.log("Chrome Extension Starter project is created.");
    console.log(`cd ${userProjectDir} && npm start`);
    rl.close();
});
