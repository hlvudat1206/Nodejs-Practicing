const http = require('http');
const fs = require('fs');
const me = require('./me.js')
console.log('test thoi ma: ' + me.myName())
http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length':data.length
        });
        res.write(data);
        res.end();
    });
}).listen(8888);