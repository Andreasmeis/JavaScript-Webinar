// var http = require('http');
// var fs = require('fs');
//
// // var index = fs.readFile('index.html')
//
// http.createServer(function (req, res) {
//     fs.readFile(__dirname + req.url, 'utf-8', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }).listen(8080);
//
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

