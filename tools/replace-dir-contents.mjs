import { existsSync, mkdirSync, readdirSync, rmSync, cpSync } from 'node:fs';
import { join } from 'node:path';

// A plain recursive copy only adds/overwrites — files removed from `src`
// since the last copy (an old hashed build chunk, a deleted blog post)
// linger in `dest` forever. Clearing every non-preserved top-level entry
// first, then copying `src` fresh, keeps `dest` an exact mirror instead.
export function replaceDirContents(src, dest, { preserve = [] } = {}) {
  if (!existsSync(src)) {
    throw new Error(`Source introuvable : ${src}`);
  }
  mkdirSync(dest, { recursive: true });

  for (const entry of readdirSync(dest)) {
    if (preserve.includes(entry)) continue;
    rmSync(join(dest, entry), { recursive: true, force: true });
  }

  for (const entry of readdirSync(src)) {
    cpSync(join(src, entry), join(dest, entry), { recursive: true });
  }
}
