//reading lorem ipsum text in readable stream.
//reading a file through stream this time.
const http = require('http');
const fs = require('fs');
//using fs to create a readbale stream.
const readStream = fs.createReadStream(__dirname + '/lorem_ipsum_text.txt', 'utf-8');
const writeStream = fs.createWriteStream(__dirname + '/write3.txt');
readStream.on('data', (chunk) => {
        console.log('new data received.');
        console.log(chunk);
        writeStream.write(chunk);
    })
    /*HERE WE ARE READING THE FILE BY CREATING A READSTREAM . EVERY TIME WE RECEIVE A CHUNK OF DATA WE ARE FIRING
    THE FUNCTION AND GET THAT CHUNK OF DATA AND LOG IT TO THE CONSOLE. THEN WE ARE WRITING DATA TO WRITESTREAM THAT WE CREATED 
    AND WRITING TO THE NEW FILE WRITE3 AND PATH IS GIVEN IN WRITESTREAM.*/