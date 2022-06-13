//Reading data through readstream and then writing data through writestream is very manual process.
//Pipe can help in making it less manual.
//Pipe can take data from read stream and pipe it into write stream.
const http = require('http');
const fs = require('fs');
const readStream = fs.createReadStream(__dirname + '/lorem_ipsum_text.txt', 'utf-8');
const writeStream = fs.createWriteStream(__dirname + '/write4.txt');
readStream.pipe(writeStream);
//Listenig to the data coming from the readStream and piping it into writeStream.
//Does exactly same thing as that nodejs5.js file but we used here pipe.