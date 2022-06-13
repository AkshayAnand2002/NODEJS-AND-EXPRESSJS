//console.log('hello world')
// setTimeout(() => {
//     console.log('hi, there.');
// }, 3000);
//3000 is the timeout which fires the function after 3000 milliseconds (ms).
// let count = 0;
// setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed.`);
// }, 2000);
//here we get output as 2 seconds have passed then 4 then 6 then 8 and also . it continues repeatedly till
//until user tries to stop the program execution by pressing CTRL+C.
//setTimeout allows us to run a function once after the interval of time. 
//setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
//setTimeout runs only one time but setInterval runs infinitely until user stops it.
// let count = 0;
// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed.`);
//     if (count > 6) {
//         clearInterval(timer);
//     }
// }, 2000);
//clearInterval-meant to stop the timer set by using the setInterval JavaScript function.
//The above program prints or gives outputs 2 seconds have passed. then for 4 for 6 for 8.
//Then since 8 > 6 clearInterval will execute and it will stop timer and so setInterval will not execute.
//Node can tell us the directory or file we are in--- by following commands.
// console.log(__dirname);
// console.log(__filename);
//below writing a function from javascript theory--
// function hello() {
//     console.log('hello,world.');
// }
// hello();
//NOW, BELOW CREATING A FUNCTION EXPRESSION FROM JAVASCRIPT THEORY--
// let hi = function() {
//     console.log('hi,there.');
// }
// hi();
//WE CAN ALSO PASS A FUNCTION AS AN ARGUEMENT TO ANOTHER FUNCTION.
// function call(func) {
//     func();
// }
// let hi = function() {
//     console.log('hi,there.');
// }
// call(hi);
//WE CAN'T WRITE ALL OUR CODES IN ONE FILE AS IT WOULD BE DIFFICULT TO MANAGE THE CODES FOR A PARTICULAR FUNCTION.
//AS WELL AS DIFFICULT FOR OTHER PERSON WHO WANT TO EXTEND OUR CODES.
//SO WE SPLIT OUR CODES INTO LOGICAL CODE MODULES.
//SO WE HAVE DIFFERENT MODULES FOR DIFFERENT BIT OF CODE WHICH HAVE A PARTICULAR FUNCTIONALITY.
//AND WE CALL THOSE MODULES WHENEVER WE NEED THEM.
//LET'S MAKE HELPER MODULE WHICH CONTAINS OUR HELPER FUNCTIONAND THAT HELPER FUNCTION TELLS US THE AUTHENTICATED USER.
//WE CAN GO UPON THE HELPER MODULE WHENEVER WE NEED IT.
//WE CREATED HELPER MODULE NOW WE NEED TO USE THAT HERE IN NODEJS1. FOR THAT WE USE REQUIRE FUNCTION.
// const callmodule = require('./helper');
// console.log(callmodule('Akshay'));
//the above command is used to call a module in the given file.
//above we created and require module in a javascript file.
//NOW THE ABOVE WAS RETURNING ONLY HELPER FUNCTION IF WE WANT TO RETURN MORE THAN 1 OR MANY DIFFERENT FUNCTONS THEN --
//we now call that function here.
// const callmodule = require('./helper');
//console.log(callmodule.user('Akshay Anand'));
//console.log(callmodule.id('Ak2002'));
//console.log(callmodule.email('akshay2002anand@gmail.com'));
//the 3 lines above are literal notations to give values to function.
//NODE JS ALSO PROVIDES A BUNCH OF IN-BUILT CORE MODULES WHICH WE CAN USE.
//THOSE CORE MODULES ARE CALLED EVENT MODULES.
//const callmodule = require('events');
//How to create an event ?
// const events = require('events');
//event module returns an event emitter and that is a constructor.
// const myEmitter = new events.EventEmitter;
// myEmitter.on('test', function(arg) {
//     console.log(arg);
// });
// myEmitter.emit('test', 'helloworld');
//1st arguement in the event function is the event that we want to emit
//2nd arguement is what we want to pass into function.
//here we are listening to test event which is on the myEmitter object.
//here we are manually emitting that event with the emit function.
//we are passing the string helloworld into the function.
//then when the event is emitted then the callback function is fired and it logs the message to the console.
// const events = require('events');
// const { EventEmitter } = require('stream');
// const util = require('util'); //allows us to inherit certain things into objects built into nodejs.
//below creating new object constructor.
// const teams = function(name) {
// this.name = name;
// }
//now we want event emitter because we want any team which is going to be created using the constructor function const teams
//to inherit the event emitter.
// util.inherits(teams, events.EventEmitter);
//1st thing passed in above is object constructor.i.e teams.
//2nd is the thing we want to emit i.e. event.eventEmitter
//making some teams now.
// const Arsenal = new teams('Arsenal');
// const Juventus = new teams('Juventus');
// const Galatasaray = new teams('Galatasaray');
//now we write event listeners to each of these teams using some custom events.
//storing teams in array.
// const teamArray = [Arsenal, Juventus, Galatasaray];
//to attach event listener to each team we will iterate this array.
//javascript method for iterating each element of array is forEach().
//for each team we will fire the call back function and it is going to take team as parameter. 
// teamArray.forEach((team) => {
//here we will attach listeners to each team.
// team.on('nation', function(nation) {
//1st thing inside team.on is the event name which we want to emit.
//we can inherit the event emitter onto any object which is created by using this constructor.
//we are going to attach custom events to each of these teams.
//now we are going to take a callback function which is gooing to take nation .i.e. function(nation)
// console.log(team.name + ' is ' + nation + ' football club' + '.'); //which is the this.name part of const teams function. 
//we emit these nation events on each team then it is going to fire the callback function console.log(team.name + ' is ' + nation + ' football club');
// });
// });
//EMITTING THE EVENT NOW.
// Arsenal.emit('nation', 'English');
// Juventus.emit('nation', 'British');
// Galatasaray.emit('nation', 'Turkish');