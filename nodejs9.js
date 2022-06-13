//serving json data into node js.
const http = require('http');
const fs = require('fs');
//Listenig to the data coming from the readStream and piping it into writeStream.
//Does exactly same thing as that nodejs5.js file but we used here pipe.
//now below going to send the user write4.txt file using server created.
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' }); //1st parameter is status code, 2nd is content-type.
    //creating an object that we want to send back as json.
    const person = {
        name: 'Alex',
        email: 'alex@email.co',
        job: 'developer'
    };
    //now sending this data back as json to clients.
    //res.end expects string or buffer as input so we need to convert it to string.
    res.end(JSON.stringify(person)); //inside json.stringify pass JSON Object.
    //now we get json file on the browser.
});
server.listen(3000, '127.0.0.1'); //1st parameter is port and 2nd parameter is I.P. Address.