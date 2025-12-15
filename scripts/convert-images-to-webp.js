/**
 * Usage:
 * 1) cd project root
 * 2) npm install sharp
 * 3) node scripts/convert-images-to-webp.js
 *
 * Converts jpg/jpeg/png in public/images/projects -> .webp (1200x675, quality 80)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "..", "public", "images", "projects");
const width = 1200;
const height = 675;
const quality = 80;

if (!fs.existsSync(inputDir)) {
  console.error("Input directory not found:", inputDir);
  process.exit(1);
}

const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) {
  console.log("No JPG/PNG files found in", inputDir);
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;
    const outPath = path.join(inputDir, `${name}.webp`);

    // skip if webp already exists
    if (fs.existsSync(outPath)) {
      console.log("Skip (exists):", outPath);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(width, height, { fit: "cover" })
        .webp({ quality })
        .toFile(outPath);
      console.log("Converted:", file, "→", path.basename(outPath));
    } catch (err) {
      console.error("Error converting", file, err);
    }
  }
  console.log("Done.");
})();