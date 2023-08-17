#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  //
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const repoName = "create-chrome-extension";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/boraaonur/create-chrome-extension`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log("Creating...");
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log("Installing dependencies...");
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("NodeJS with Typescript project is created.");
console.log(`cd ${repoName} && npm start`);
