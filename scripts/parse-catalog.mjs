import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseCSV(text) {
  const rows = [];
  let i = 0;
  const n = text.length;

  function readField() {
    if (text[i] === '"') {
      i++;
      let field = '';
      while (i < n) {
        if (text[i] === '"') {
          i++;
          if (i < n && text[i] === '"') {
            field += '"';
            i++;
          } else {
            break;
          }
        } else {
          field += text[i++];
        }
      }
      return field;
    }
    let field = '';
    while (i < n && text[i] !== ',' && text[i] !== '\r' && text[i] !== '\n') {
      field += text[i++];
    }
    return field;
  }

  while (i < n) {
    if (text[i] === '\r') { i++; continue; }
    if (text[i] === '\n') { i++; continue; }

    const row = [];
    while (i < n) {
      row.push(readField());
      if (i < n && text[i] === ',') {
        i++;
      } else {
        if (i < n && text[i] === '\r') i++;
        if (i < n && text[i] === '\n') i++;
        break;
      }
    }
    if (row.length > 0 && row.some(f => f.trim())) rows.push(row);
  }

  return rows;
}

const csvPath = join(__dirname, '../public/images/catalogo/ProductosTest_Fichas.csv');
const outPath = join(__dirname, '../src/data/catalog.js');

const raw = readFileSync(csvPath, 'utf-8').replace(/^﻿/, '');
const rows = parseCSV(raw);
const [headers, ...dataRows] = rows;

console.log('Headers:', headers);

const products = dataRows.map((row, idx) => {
  const obj = {};
  headers.forEach((h, i) => { obj[h.trim()] = (row[i] || '').trim(); });
  return obj;
});

const cats = [...new Set(products.map(p => p.categoria).filter(Boolean))];
console.log('Categorías:', cats);
console.log('Productos por categoría:');
cats.forEach(c => console.log(` ${c}: ${products.filter(p => p.categoria === c).length}`));

const catalog = products.map((p, idx) => ({
  id: idx + 1,
  name: p.descripcion || '',
  category: p.categoria || '',
  image: `/images/catalogo/${p.imagen_nombre || p.archivo_imagen || ''}`,
  codigo: p.codigo || '',
  fichaTecnica: p.ficha_tecnica || '',
}));

const js = `// Generado automáticamente desde ProductosTest_Fichas.csv — no editar a mano
const catalog = ${JSON.stringify(catalog, null, 2)};

export default catalog;
`;

writeFileSync(outPath, js, 'utf-8');
console.log(`\n✓ Generados ${catalog.length} productos → src/data/catalog.js`);
