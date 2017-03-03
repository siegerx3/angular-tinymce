/**
 * Creates a package.json for the release NPM package structure.
 */
const fs = require('fs');
const path = require('path');
const filepath = './dist/package.json'
const basePkgJson = JSON.parse(fs.readFileSync(filepath, 'utf8'));

// remove scripts
delete basePkgJson.scripts;

// remove devDependencies (as there are important for the sourcecode only)
delete basePkgJson.devDependencies;

// transform dependencies to peerDependencies for the release
var dependencies = {};
var peerDependencies = {};

for(var key in basePkgJson.dependencies){
  if(basePkgJson.dependencies.hasOwnProperty(key)){
    if(key.startsWith('@angular')){
      peerDependencies[key] = basePkgJson.dependencies[key];
    }else{
      dependencies[key] = basePkgJson.dependencies[key];
    }
  }
}

basePkgJson.peerDependencies = peerDependencies;
basePkgJson.dependencies = dependencies;

fs.writeFileSync(filepath, JSON.stringify(basePkgJson, null, 2), 'utf-8');
