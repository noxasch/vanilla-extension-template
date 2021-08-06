/* eslint-disable import/no-extraneous-dependencies */
const jestChrome = require('jest-chrome');

Object.assign(global, jestChrome);

// import { JSDOM } from 'jsdom';
// import fs from 'fs';
// import path from 'path';

// const html = fs.readFileSync(path.join(process.cwd(), 'src', 'popup', 'index.html'));
// const dom = new JSDOM(html);

// document.body.innerHTML = dom.window.document.body.innerHTML;
