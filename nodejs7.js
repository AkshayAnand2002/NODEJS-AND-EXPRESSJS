//Reading data through readstream and then writing data through writestream is very manual process.
//Pipe can help in making it less manual.
//Pipe can take data from read stream and pipe it into write stream.
const http = require('http');
const fs = require('fs');

//Listenig to the data coming from the readStream and piping it into writeStream.
//Does exactly same thing as that nodejs5.js file but we used here pipe.
//now below going to send the user write4.txt file using server created.
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //1st parameter is status code, 2nd is content-type is plain text.
    const readStream = fs.createReadStream(__dirname + '/lorem_ipsum_text.txt', 'utf-8');
    readStream.pipe(res); //we want to send the text directly to user using response and we pipe readstream into response stream.
});
server.listen(3000, '127.0.0.1'); //1st parameter is port and 2nd parameter is I.P. Address.