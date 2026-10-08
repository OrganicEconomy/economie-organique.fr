import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { replaceDirContents } from './replace-dir-contents.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const webappBuild = join(root, '..', 'organic-webapp', 'dist', 'organic-webapp', 'browser');
const contentApp = join(root, 'content', 'app');

if (!existsSync(webappBuild)) {
  console.error(`organic-webapp n'est pas construit (introuvable : ${webappBuild}).`);
  console.error('Lance `npm run build` dans organic-webapp, puis relance cette commande.');
  process.exit(1);
}

console.log('> Copying the organic-webapp build into content/app...');
replaceDirContents(webappBuild, contentApp);

console.log('> Running Pelican (production config)...');
execSync('python3 -m pelican content -o output -s publishconf.py', { cwd: root, stdio: 'inherit' });

console.log('\nDone. Check output/, then run `npm run pushToGithub`.');
