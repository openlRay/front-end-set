var fs = require('fs')
var path = require('path')
var data
var dirname = path.dirname(__filename)

// try {
//   data = fs.readFileSync(path.join(dirname, 'fileForRead.txt'), 'utf8')
//   console.log('文件内容: ' + data)
// } catch (err) {
//   console.error('读取文件出错: ' + err.message)
// }

// fs.readFile(path.join(dirname, 'fileForRead.txt'), 'utf8', function(err, data) {
//   if (err) {
//     return console.error('读取文件出错: ' + err.message)
//   }
//   console.log('文件内容: ' + data)
// })

// var readStream = fs.createReadStream(
//   path.join(dirname, 'fileForRead.txt'),
//   'utf8'
// )

// readStream
//   .on('data', function(chunk) {
//     console.log('读取数据: ' + chunk)
//   })
//   .on('error', function(err) {
//     console.log('出错: ' + err.message)
//   })
//   .on('end', function() {
//     // 没有数据了
//     console.log('没有数据了')
//   })
//   .on('close', function() {
//     // 已经关闭，不会再有事件抛出
//     console.log('已经关闭')
//   })

// fs.writeFile(
//   path.join(dirname, 'fileForWrite.txt'),
//   'hello world',
//   'utf8',
//   function(err) {
//     if (err) throw err
//     console.log('文件写入成功')
//   }
// )

// try {
//   fs.writeFileSync(
//     path.join(dirname, 'fileForWrite1.txt'),
//     'hello world',
//     'utf8'
//   )
//   console.log('文件写入成功')
// } catch (err) {
//   throw err
// }

// var writeStream = fs.createWriteStream(
//   path.join(dirname, 'fileForWrite1.txt'),
//   'utf8'
// )

// writeStream.on('close', function() {
//   // 已经关闭，不会再有事件抛出
//   console.log('已经关闭')
// })

// writeStream.write('hello')
// writeStream.write('\n')
// writeStream.write('world')
// writeStream.end('')

// fs.access(path.join(dirname, 'fileForWrite1.txt'), function(err) {
//   if (err) throw err
//   console.log('fileForRead.txt存在')
// })

// fs.access('./fileForRead2.txt', function(err) {
//   if (err) throw err
//   console.log('fileForRead2.txt存在')
// })

// fs.mkdir(path.join(dirname, 'test'), function(err) {
//   if (err) throw err
//   console.log('目录创建成功')
// })

var options = {
  persistent: true, // 默认就是true
  interval: 2000 // 多久检查一次
}

// curr, prev 是被监听文件的状态, fs.Stat实例
// 可以通过 fs.unwatch() 移除监听
fs.watchFile(path.join(dirname, 'fileForWrite1.txt'), options, function(
  curr,
  prev
) {
  console.log(curr)
  console.log('修改时间为: ' + curr.mtime)
})
