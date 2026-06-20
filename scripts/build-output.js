const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
const files = ['index.html', 'robots.txt', 'sitemap.xml'];
const directories = ['assets', 'city', 'css', 'guides', 'js', 'zh'];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

files.forEach(file => {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
});

directories.forEach(directory => {
  fs.cpSync(path.join(root, directory), path.join(output, directory), { recursive: true });
});

const forbidden = ['node_modules', 'scripts', 'marketing', 'package.json'];
forbidden.forEach(entry => {
  if (fs.existsSync(path.join(output, entry))) {
    throw new Error(`Production output unexpectedly contains ${entry}`);
  }
});

const countFiles = directory => fs.readdirSync(directory, { withFileTypes: true })
  .reduce((count, entry) => count + (entry.isDirectory()
    ? countFiles(path.join(directory, entry.name))
    : 1), 0);

console.log(`Prepared ${countFiles(output)} production files in public/.`);
