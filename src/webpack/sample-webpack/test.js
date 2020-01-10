const fs = require('fs')
const path = require('path')
const content = fs.readFileSync(path.join(__dirname, './src/index.js'), 'utf-8')
console.log(content)
