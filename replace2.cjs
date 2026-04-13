const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace RGB values
  content = content.replace(/rgba\(255,0,0,/g, 'rgba(57,255,20,');
  content = content.replace(/rgba\(255, 0, 0,/g, 'rgba(57, 255, 20,');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) traverse(full);
    else processFile(full);
  }
}

traverse('c:/Nest.JS/Noctra_Eventos/src');
