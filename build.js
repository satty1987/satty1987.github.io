const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
await fs.ensureDir('build')
await fs.copyFile('./payment-app/payment/main.js', 'build/paymentelement.js');
await fs.copyFile('./header-app/elements/main.js', 'build/headerelement.js');
await fs.copyFile('./react-app/build/static/js/bundle.min.js', 'build/react.js');
})()
