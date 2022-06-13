//to install express type ' npm install express ' in terminal.
//we can keep track of packages that we depend on by using package.json.
//package.json file can be created by ' npm init '.
//whenever we install a package it will be stored as a dependency in package.json.
//install express again after (uninstalling by npm uninstall express) by 'npm install express -save'.
//-save as it is a dependency on original file.
//to install all packages in 1 step only we use 'npm install'.
//expressjs helps in making our code short and designing and building web apps quickly.
//nodemon is a great little package for monitoring an app in development..
//so, on working in browser , listening to server if we make changes in one of the application files 
//then it can track it and automatically restart the server for us when we save that file.
//so no need to rerun applications again and again. We will just refresh the browser and get that new change.
//Usuall packages are installed locally to an application eg- express js but some packages such as nodemon are installed globally
//and are not local to an application.
//install nodemon by 'npm install nodemon -g '.
//start nodemon by 'nodemon filename.js'
//if nodemon shows error of can't be loaded then the foll way is to rectify it:
//1. Open Windows PowerShell with Run as Administrator
//2. Run this command: Set-ExecutionPolicy Unrestricted
//if we make some changes in file then the nodemon restarts automatically and we don't need to off it by Control+C and then
//write and execute command again.