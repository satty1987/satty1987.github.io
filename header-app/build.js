const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/header-app/runtime.js',
'./dist/header-app/polyfills.js',
'./dist/header-app/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/main.js');
await fs.copyFile('./dist/header-app/styles.css', 'elements/styles.css');
})()
