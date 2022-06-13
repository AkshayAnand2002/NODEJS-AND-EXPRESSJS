//Express is a module in javascript that we can use in our application.
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
//1st parameter of app.get is route which user will type in to get ssome data.
//2ns is request and response object present.
app.listen(3000); //listen to the port no. 3000 with app.listen.
//http request are kind of requests we make to get requests which we make requests to address bar.
//http methods are get,post,delete and put.