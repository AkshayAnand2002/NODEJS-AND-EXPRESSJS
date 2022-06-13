//to read and write files on computer use 'fs' module.
// const fs = require('fs');
// const text = fs.readFileSync('file.txt', 'utf-8'); //to read file in fs module.
//if any code is present below the above code line the it is going to read file before moving to any other code.
//fs.readFileSync() blocks the flow of code until it is completed.
//1st arguement is full path to the file. 2nd argument is character encoding utf-8.
//console.log(text);  --> used to print contents of a file in terminal.
//to write in a file. use--
// fs.writeFileSync('write.txt', text)
//1st parameter is file name. 2nd parameter is the data which we want to write into the new file .i.e text here.
//after above lines we type command in terminal i.e. node filename to see new txt file generated.
//above is SYNCHORONOUS METHOD FOR FILES.
//NOW ASYNCHRONOUS METHOD FOR FILES.
// const fs = require('fs');
// const text = fs.readFile('file.txt', 'utf-8', function(error, data) {
//     console.log(data);
// });  
//above code for reading a file's data
// const text = fs.readFile('file.txt', 'utf-8', function(error, data) {
//     fs.writeFile('write2.txt', data, function(error) {
//         if (error) {
//             console.log(error)
//         }
//     })
// });
//the above is asynchronous method . we need to pass 3rd parameter i.e. callback function.
//function 2 arguements are error and data ; error when error message and data when no error.
//the above program does nogt block the code as was in case of synchronous way.
//if we write any line after the asynchronous way code then that will be printed first and then the code output.
//EVEN THOUGH WRITTEN AFTERWARDS.
// console.log('HI,THERE!!')
//for writing in file use fs.writeFile . 1st parameter is filename 2nd is data and 3rd is callback function taking care of error.
//TO DELETE A FILE.
//use fs.unlink() and pass the name of file to delete 2nd parameter or arguement is the callback function taking care of error.
// fs.unlink('file_to_delete.txt', (error) => {
//     console.log(error)
// })
//now 2 ways to create a directory -> synchronous and asynchronous.
//use fs.mkdirSync --> synchronous method
// fs.mkdirSync('directory_created');
//to remove or delete directory use rmdirSync 
// fs.rmdirSync('directory_created');
//BUT THE SYNCHRONOUS METHOD BLOCKS UP THE CODE SO WE NEED TO WORK ASYNCHRONOUSLY.
//remove sync  and put callback function parameter to make them asynchronous.
// fs.mkdir('directory_created', () => {
//     fs.readFile('write.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./directory_created/write-me.txt', data, (error) => {
//             console.log(error)
//         })
//     })
// });
//above code first reads the file write.txt then write the content of file into write-me.txt 
//we put in data and at last error handling function.
// fs.rmdir('directory_created', (error) => {
//         console.log(error);
//     })
//the above gives error of directory not empty. 
//so first unlink files from the folder the remove directory.
// fs.unlink('./directory_created/write-me.txt', () => {
//     fs.rmdir('directory_created', (error) => {
//         console.log(error);
//     })
// })