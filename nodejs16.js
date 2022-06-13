//HOW TO SEND BACK AN HTML PAGE ?
//Using the sendFile method and giving the absolute URL.
const express = require('express');
const app = express();
//through the above expression we can access all different methods on express like routing or template engine.
//we also need to listen to a port.
app.get('/', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    res.sendFile(__dirname + '/index.html'); //linking index.html with res.sendFile method.
});
app.get('/about', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    res.sendFile(__dirname + '/about.html'); //linking about.html with res.sendFile method.
});
app.get('/profile/:id', (req, res) => { //if we give any id after writing profile then that is printed on screen.
    //---/profile/123 output on the screen when  we switch to the browser by nodemon is PROFILE ID IS 123 .
    res.send('PROFILE ID IS ' + req.params.id + ' .');
});
app.get('/profile/:name', (req, res) => { //if we give any name after writing profile then that is printed on screen.
    //---/profile/akshay output on the screen when  we switch to the browser by nodemon is PROFILE NAME IS akshay .
    res.send('PROFILE NAME IS ' + req.params.name + ' .');
});
//1st parameter of app.get is route which user will type in to get ssome data.
//2ns is request and response object present.
app.listen(3000);
//through javascript template engines we embed data and javascript codes into our html files.
//We can inject the dynamic content into the file and then return to the client or browser.
//to install ejs as dependency --> npm install ejs -save
//After installing we use ejs as our display engine. This is called view engine or template engine.