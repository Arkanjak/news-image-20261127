// Entry for news-image-20261127: one poster summing up Friday 27 November 2026.
// The artwork ships beside this file as entry.png (JPEG bytes, 1024x1024).
// Running the program copies those exact bytes to the output directory, so
// every run produces an identical file for the gate and the judge.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const here = import.meta.dirname;
const artwork = join(here, 'entry.png');
if (!existsSync(artwork)) throw new Error(`missing artwork: ${artwork}`);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(artwork, join(outDir, 'entry.png'));
