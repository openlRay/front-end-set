var fs = require('fs')
var path = require('path')
function writeFile(dirname, fileContent) {
  try {
    fs.writeFileSync(
      path.join(dirname, 'fileForWrite.json'),
      JSON.stringify(fileContent),
      'utf8'
    )
    console.log('文件写入成功')
  } catch (err) {
    throw err
  }
}
module.exports = { writeFile }
