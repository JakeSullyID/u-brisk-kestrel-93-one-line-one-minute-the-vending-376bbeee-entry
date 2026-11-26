import * as fs from 'fs';
import * as path from 'path';

// The original line won because specific vending machine hardware like coin returns and exact change beats generic kiosk displays.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const entryPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(entryPath, 'Is your name exact change? Because every time you walk by, my coin return starts clicking with anticipation.', 'utf-8');
