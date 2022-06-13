// const helper = function(data) {
//     return `${data} is logged in.`;
// };
// console.log(helper('Akshay'));
//the above commands are for making helper function.
//but we need to make then available for use as module in other files.
//for that we write as-
// const helper = function(data) {
//     return `${data} is logged in.`;
// };
//console.log(helper('Akshay'));
//the above line is not required here as we use the helper module in other files.
//the above will be reuired in file where we call the helper module.
// module.exports = helper;
//-----
//for calling more than 1 function we do the following.
// const user = function(data) {
//     return `${data} is logged in.`;
// };
// let id = function(id) {
//     return `${id}`;
// };
// let email = function(email) {
//     return email;
// }
// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;
//after writing the above we go to the file which requires the above functions to be used.
//writing the above lines in a different way.
//above we called the function 3 times but it is inefficient .But we need to make it more efficient.
const user = function(data) {
    return `${data} is logged in.`;
};
let id = function(id) {
    return `${id}`;
};
let email = function(email) {
    return email;
}
module.exports = {
    user,
    id,
    email
};