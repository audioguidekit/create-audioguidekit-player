#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const repoUrl = 'https://github.com/audioguidekit/player-react.git';
const projectName = process.argv[2] || 'audioguidekit-player';

console.log(`\n🎧 Creating AudioGuideKit player in ./${projectName}...\n`);

try {
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });

  console.log(`\n✅ Done! To get started:\n`);
  console.log(`   cd ${projectName}`);
  console.log(`   npm install`);
  console.log(`   npm run dev\n`);
} catch (error) {
  console.error('Failed to clone repository:', error.message);
  process.exit(1);
}
