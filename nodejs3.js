//to create server in nodejs use 'http' module.
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//writing a response. 1st parameter is going to be status and 2nd parameter is Content-type which can be 
//HTML, plain-text or JSON.
//next is to end the response to send to the browser. Use end method on response object.
// res.end('hello world!'); //we can send back some information or data. This information entered here can be seen on site.
//});
//createServer takes 2 arguements or parameters a request object and response object.
//header is the extra information about the request or response.
//we can also put a status in response header. eg- 200 or 404 if page not found.
//headers can contain status and content-type.
//now below specifying the port no. that we want to listen to.
// console.log('PORT 3000');
// server.listen(3000, '127.0.0.1');
//1st parameter is port no., 2nd arguement is I.P. ADDRESS.
//now server is listening to port on that I.P.Address.
//then we run the command in terminal using node filename.
//after running we type 127.0.0.1:3000 in any browser to run our created server.
//127.0.0.1 is IP ADDRESS WE GAVE ABOVE AND 3000 IS THE PORT NO.
//200 CAN BE SEEN IN HEADERS PART ON CLICKING INSPECT ON WEBPAGE WHICH IS THE STATUS CODE.
//--------------------------------
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url); //this is a property we can access on request object.
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//writing a response. 1st parameter is going to be status and 2nd parameter is Content-type which can be 
//HTML, plain-text or JSON.
//next is to end the response to send to the browser. Use end method on response object.
// res.end('hello world!'); //we can send back some information or data. This information entered here can be seen on site.
// });
// console.log('PORT 3000');
// server.listen(3000, '127.0.0.1');
//EVERY TIME A REQUEST IS MADE WE SEE LOG OR /something.ico .
//EVEN IF WE CHANGE URL TO http://127.0.0.1:3000/aaaa THEN WE see /aaaa in terminal window.