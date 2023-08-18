#!/usr/bin/env node

import { runCommand, updatePackageJson } from "./utils";

import readline from "readline";
import fs from "fs";
import path from "path";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What project name do you want to use? ", (answer) => {
  const userProjectDir = answer.trim();
  const repoName = "create-chrome-extension";

  const createDirCommand = `mkdir ${userProjectDir}`;
  const gitCheckoutCommand = `cd ${userProjectDir} && git clone --depth 1 https://github.com/boraaonur/create-chrome-extension`;

  runCommand(createDirCommand);
  runCommand(gitCheckoutCommand);

  // Move the contents of the cloned directory to the user's specified directory
  const sourcePath = path.join(userProjectDir, repoName);
  const destPath = userProjectDir;
  fs.readdirSync(sourcePath).forEach((file) => {
    fs.renameSync(path.join(sourcePath, file), path.join(destPath, file));
  });

  // Remove the empty 'create-chrome-extension' directory
  fs.rmdirSync(sourcePath);

  // Clean unnecessary files and folders
  console.log("Cleaning...");
  runCommand(`rm -rf ${userProjectDir}/bin`);
  runCommand(`rm ${userProjectDir}/README.md`);
  // runCommand(`rm ${userProjectDir}/package-lock.json`);

  // Change name in package.json aswell
  updatePackageJson(userProjectDir);

  // Installing dependencies
  console.log("Installing dependencies...");
  runCommand(`cd ${userProjectDir} && npm install`);

  console.log("Chrome Extension Starter project is created.");
  console.log(`cd ${userProjectDir} && npm start`);

  rl.close();
});
