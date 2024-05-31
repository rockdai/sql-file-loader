'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function sqlFileLoader(dir) {
  const fileList = fs.readdirSync(dir);
  const result = [];
  for (const fileName of fileList) {
    if (fileName.startsWith('.') || !fileName.endsWith('.sql')) {
      continue;
    }
    const content = fs.readFileSync(path.join(dir, fileName), 'utf8');
    const tableName = fileName.replace(/\.sql$/, '');
    result.push([ tableName, content ]);
  }
  return result;
};
