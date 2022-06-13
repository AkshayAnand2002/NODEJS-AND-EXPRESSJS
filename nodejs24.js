//Query Strings In Express JS.
//Query String is an additional data added to a http request in the form of key-value pair.
//example--> http://localhost:3000/about?job=developer&name=alex
const express = require('express');
const app = express();
//through the above expression we can access all different methods on express like routing or template engine.
//we also need to listen to a port.
app.set('view engine', 'ejs');
//1st parameter is view engine and we want ejs as our view engine.
// app.use('/assets', (req, res, next) => {
//     console.log(req.url);
//     next();
// });
//Express already comes with middleware installed and that can be used in this static files.
app.use('/assets', express.static('assets'));
//express.statis is the inbuilt middleware of Express JS .
//We map express.static to folders where express.static files are stored i.e. here in assets folder.
app.get('/', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    res.render('index'); //rendering and passing the view name.
});
app.get('/about', (req, res) => {
    //when user goes to this address with '/' we will run the function and respond in a specific way.
    console.log(req.query);
    // ?job=developer&name=alex
    //express js has inbuilt library to deal with query strings and we use query feature for the same. 
    res.render('about'); //rendering and passing the view name.
});
// app.get('/profile/:id', (req, res) => { //if we give any id after writing profile then that is printed on screen.
//     //---/profile/123 output on the screen when  we switch to the browser by nodemon is PROFILE ID IS 123 .
//     res.send('PROFILE ID IS ' + req.params.id + ' .');
// });
app.get('/profile/:name', (req, res) => { //if we give any name after writing profile then that is printed on screen.
    //---/profile/akshay output on the screen when  we switch to the browser by nodemon is PROFILE NAME IS akshay .
    const data = { age: 30, job: 'developer', friends: ['ABC', 'XYZ', 'KLM'] };
    res.render('profile4', { person: req.params.name, moredata: data });
    //added more property to the above line by using 2nd parameter 
    //res.render method to create a view.Inside the render function pass the name of file i.e. profile/
});
//1st parameter of app.get is route which user will type in to get some data.
//2ns is request and response object present.
app.listen(3000);
//-------------------------------------------------------------------------------------
//WHEN WE TYPE WEBSITE: http://127.0.0.1:3000/about?job=developer&name=alex OR http://localhost:3000/about?job=developer&name=alex
//WE GET OUTPUT IN TERMINAL AS-> { job: 'developer', name: 'alex' }
//EXPRESS JS HAS MADE IT VERY EASY TO ACCESS QUERY STRING DATA AS SEEN ABOVE.