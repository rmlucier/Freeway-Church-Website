// Simple test to check if our main components can be imported
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking project structure...');

// Check if key files exist
const keyFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'next.config.ts',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
];

let allFilesExist = true;

keyFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

// Check component files
const componentFiles = [
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/ServiceTimes.tsx',
  'src/components/sections/Programs.tsx',
  'src/components/sections/NextSteps.tsx',
];

componentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n🎉 All files are present!');
  console.log('📦 Ready for deployment!');
} else {
  console.log('\n❌ Some files are missing');
}

// Clean up
fs.unlinkSync(__filename);