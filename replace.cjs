const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css') && !filePath.endsWith('.js')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace references of red with primary in tailwind classes
  content = content.replace(/\btext-red\b/g, 'text-primary');
  content = content.replace(/\bbg-red\b/g, 'bg-primary');
  content = content.replace(/\bborder-red\b/g, 'border-primary');
  content = content.replace(/\bfrom-red\b/g, 'from-primary');
  content = content.replace(/\bvia-red\b/g, 'via-primary');
  content = content.replace(/\bto-red\b/g, 'to-primary');
  content = content.replace(/\bfill-red\b/g, 'fill-primary');
  content = content.replace(/\bring-red\b/g, 'ring-primary');
  
  // Handle variations (-light, -dark)
  content = content.replace(/-red-light\b/g, '-primary-light');
  content = content.replace(/-red-dark\b/g, '-primary-dark');
  content = content.replace(/-red\b/g, '-primary');
  
  // Specific inline overrides where I used explicit hex arrays
  content = content.replace(/#[Ff][Ff]0000/g, '#39FF14');
  
  // Change Name
  content = content.replace(/Noctra/g, 'FOLE');
  content = content.replace(/NOCTRA/g, 'FOLE');
  
  // A specific check for any wa.me noctra strings
  content = content.replace(/Hola Noctra/gi, 'Hola FOLE');
  
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
