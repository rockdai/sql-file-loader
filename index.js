'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function sqlFileLoader(dir) {
  const filelist = fs.readdirSync(dir);
  const result = [];
  for (const filename of filelist) {
    if (filename.startsWith('.') || !filename.endsWith('.sql')) {
      continue;
    }
    const content = fs.readFileSync(path.join(dir, filename), 'utf8');
    const name = filename.replace(/\.sql$/, '');
    result.push({ name, content });
  }
  return result;
};
