const fs = require('fs')
const path = require('path')
const fileSystem = path.dirname(
  '/front-end-set/src/javaScript/nodejs/file_system/test.txt'
)
// fs.unlink('/front-end-set/src/javaScript/nodejs/file_system/test.txt', err => {
//   if (err) throw err
//   console.log('已成功删除 /tmp/hello')
// })

// try {
//   fs.unlinkSync('/front-end-set/src/javaScript/file_system/nodejs/test.txt')
//   console.log('已成功删除 /tmp/hello')
// } catch (err) {
//   // 处理错误
//   console.log(err)
// }

// fs.rename(
//   path.join(fileSystem, 'test1.txt'),
//   path.join(fileSystem, 'test2.txt'),
//   err => {
//     if (err) throw err
//     console.log('重命名完成')
//   }
// )
// fs.stat(path.join(fileSystem, 'test2.txt'), (err, stats) => {
//   if (err) throw err
//   console.log(`文件属性: ${JSON.stringify(stats)}`)
// })

// fs.open(path.join(fileSystem, 'test2.txt'), 'r', (err, fd) => {
//   console.log(fd)
//   if (err) throw err
//   fs.close(fd, err => {
//     if (err) throw err
//   })
// })

// const fs = require('fs');
// const fileUrl = new URL('file:///tmp/hello');

// fs.readFileSync(fileUrl);

// fs.opendir(path.join(Dir.path, 'test2.txt'), err => {
//   console.log(err)
// })

fs.watch(
  path.join(fileSystem, 'test2.txt'),
  { encoding: 'utf8' },
  (eventType, filename) => {
    if (filename) {
      console.log(filename)
      // 打印: <Buffer ...>
    }
  }
)
