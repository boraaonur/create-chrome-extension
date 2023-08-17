#!/usr/bin/env node

const { execSync } = require("child_process");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

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

  // Installing dependencies
  console.log("Installing dependencies...");
  const installedDeps = runCommand(`cd ${userProjectDir} && npm install`);
  if (!installedDeps) process.exit(-1);

  // Clean unnecessary files and folders
  console.log("Cleaning...");
  runCommand(`rm -rf ${userProjectDir}/bin`);
  runCommand(`rm ${userProjectDir}/README.md`);

  console.log("Chrome Extension Starter project is created.");
  console.log(`cd ${userProjectDir} && npm start`);

  rl.close();
});
