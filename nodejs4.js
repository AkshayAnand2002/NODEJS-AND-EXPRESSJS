//reading lorem ipsum text in readable stream.
//reading a file through stream this time.
const http = require('http');
const fs = require('fs');
//using fs to create a readbale stream.
const readStream = fs.createReadStream(__dirname + '/lorem_ipsum_text.txt', 'utf-8');
//the above command is used to create a readable stream for us thtough which we can read our data.
//give file to be read in the function above.
//There is an event called data on createReadStream which allow us to listen for whenever we receive any kind of data from stream.
readStream.on('data', (chunk) => {
        console.log('new data received.');
        console.log(chunk);
    })
    //the above code fires a callback function everytime it receives some data.
    //that some data is called chunk. The chunk fills up the buffer , the buffer passes that on.
    //Every time it passes the data , it recognises that because we are listening for data event.
    //Then it will fire the function which here consists of console.log statements inside it.