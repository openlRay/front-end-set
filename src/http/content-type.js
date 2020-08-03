/*
 * @Author: ray_sun
 * @Date: 2020-03-30 11:41:50
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-30 11:51:09
 */
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.setHeader('Content-Length', 10);
    res.setHeader('Transfer-Encoding', 'chunked');
    res.write("<p>来啦</p>");
    setTimeout(() => {
      res.write("第一次传输<br/>");
    }, 1000);
    setTimeout(() => {
      res.write("第二次传输");
      res.end()
    }, 2000);
  }
  console.log(res)
})

server.listen(8009, () => {
  console.log("成功启动");
})
