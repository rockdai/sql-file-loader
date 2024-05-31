'use strict';

const path = require('path');
const loader = require('../');
const assert = require('assert');

const filelist = loader(path.join(__dirname, './fixture'));
assert.deepStrictEqual(filelist, [
  { name: 'a', content: "select 'a';" },
  { name: 'b', content: 'bbbb' },
]);
console.log('ok');
