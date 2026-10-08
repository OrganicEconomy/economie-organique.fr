import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { replaceDirContents } from './replace-dir-contents.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'output');
const githubRepo = join(root, '..', 'OrganicEconomy.github.io');

console.log('> Copying output/ into OrganicEconomy.github.io...');
replaceDirContents(output, githubRepo, { preserve: ['.git', 'CNAME', 'LICENSE', 'README.md'] });

console.log('\nDone — files copied, nothing committed. Review before pushing:');
execSync('git status --short', { cwd: githubRepo, stdio: 'inherit' });
