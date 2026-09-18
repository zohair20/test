import fs from 'fs';
import path from 'path';
import { Question } from '../src/types';

// Let's ensure data directory exists
const partsDir = path.join(process.cwd(), 'src', 'data', 'parts');
if (!fs.existsSync(partsDir)) {
  fs.mkdirSync(partsDir, { recursive: true });
}

console.log('Script de génération directe des 10 parties spécialisées initialisé.');
