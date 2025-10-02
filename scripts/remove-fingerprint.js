import fs from "fs";

const files = [
  "node_modules/lucide-react/dist/esm/lucide-react.js",
  "node_modules/lucide-react/dist/esm/icons/index.js",
];

files.forEach((file) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, "utf8");
    const newContent = content
      .split("\n")
      .filter((line) => !line.includes("Fingerprint"))
      .join("\n");

    fs.writeFileSync(file, newContent, "utf8");
    console.log(`Removed Fingerprint lines from ${file}`);
  } else {
    console.log(`File ${file} not found`);
  }
});
