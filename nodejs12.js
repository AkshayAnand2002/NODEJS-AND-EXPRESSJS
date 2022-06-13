//Routing In Node JS.
const http = require('http');
const fs = require('fs');
//Listenig to the data coming from the readStream and piping it into writeStream.
//Does exactly same thing as that nodejs5.js file but we used here pipe.
//now below going to send the user write4.txt file using server created.
const server = http.createServer(function(req, res) {
    console.log('url', req.url)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});
server.listen(3000, '127.0.0.1'); //1st parameter is port and 2nd parameter is I.P. Address.