#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const repoName = "create-chrome-extension";

console.log("Cloning repository...");
const checkedOut = runCommand(
  `git clone --depth 1 https://github.com/boraaonur/${repoName}`
);

if (!checkedOut) process.exit(-1);

console.log("Installing dependencies...");
const installedDeps = runCommand(`cd ${repoName} && npm install`);
if (!installedDeps) process.exit(-1);

console.log("Cleaning...");
runCommand(`rm -rf ${repoName}/bin`);
runCommand(`rm ${repoName}/README.md`);

console.log("Chrome Extension Starter project is created.");
console.log(`cd ${repoName} && npm start`);
