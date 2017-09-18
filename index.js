/* eslint-disable import/exports-last, import/no-commonjs */
const fs = require('fs');
const stripComments = require('strip-json-comments');

const config = stripComments(fs.readFileSync('./.eslintrc.json', 'utf-8'));

exports.module = config;
/* eslint-enable import/exports-last, import/no-commonjs */
