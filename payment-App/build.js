const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/payment-app/runtime.js',
'./dist/payment-app/polyfills.js',
'./dist/payment-app/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/main.js');
await fs.copyFile('./dist/payment-app/styles.css', 'elements/styles.css');
})()
