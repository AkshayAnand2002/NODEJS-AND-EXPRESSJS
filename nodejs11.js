//Routing In Node JS.
const http = require('http');
const fs = require('fs');
//Listenig to the data coming from the readStream and piping it into writeStream.
//Does exactly same thing as that nodejs5.js file but we used here pipe.
//now below going to send the user write4.txt file using server created.
const server = http.createServer((req, res) => {
    if (req.url === '/home' || '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
});
server.listen(3000, '127.0.0.1'); //1st parameter is port and 2nd parameter is I.P. Address.
//if we write anything other than /home or / then the loading symbol seems spinning for sometime looking to go somewhere.