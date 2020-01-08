var fs = require('fs')
var path = require('path')
function writeFile(dirname, fileContent, flag = 'w') {
  try {
    fs.writeFileSync(
      path.join(dirname, 'fileForWrite.json'),
      JSON.stringify(fileContent),
      {
        encoding: 'utf8',
        flag: flag
      }
    )
    console.log('文件写入成功')
  } catch (err) {
    throw err
  }
}
module.exports = { writeFile }
