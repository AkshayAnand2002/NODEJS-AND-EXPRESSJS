//Routing In Express JS.
//Important way to create routes when they are dynamic and variable.
const express = require('express');
const app = express();
//through the above expression we can access all different methods on express like routing or template engine.
//we also need to listen to a port.
app.get('/', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    res.send('Home Page'); //sending response string to the user which is visible to user on webpage.
});
app.get('/about', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    res.send('About Page'); //sending response string to the user which is visible to user on webpage.
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
app.listen(3000); //listen to the port no. 3000 with app.listen.
//http request are kind of requests we make to get requests which we make requests to address bar.
//http methods are get,post,delete and put.