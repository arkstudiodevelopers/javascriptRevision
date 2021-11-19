//syntax of function
function firstFunction() {
    console.log("This is the first function");
}
//callling the function
firstFunction();

//using parameters in functions
function secFunction(a, b) { // a and b are parameters
    console.log(a - b);
}
secFunction(10, 5);

//scope, visibility of variables.
/**
 * if you dont use the "var" and "let" key words then the variable
 * become global variables
 */
// variables declared within a function as well as the function parameter are 
//local varibles
function thirdfunction() {
    var myNum;
    myNum = 56;
    console.log(myNum);
}
thirdfunction();
//console.log(myNum); -> this will give an error.

/**
 * having the same variable name
 * one local, while the other is global variable
 */
var mySweater = "woolen";

function fourthFunction() {
    var mySweater;
    mySweater = "silk";
    console.log(mySweater);
}
console.log(fourthFunction());
console.log(mySweater);

//return in functions

function fifthFunction(abs) {
    return abs * 5;
}
console.log(fifthFunction(10));

//understanding undefined values. if you do not have a return
/** in your 
 * function 
 * then it 
 * returns undefined
 */


// functionalities of a queue.
/**
 * using the 
 * nextInline function.
 */
function nextInline(arr, item) {
    arr.push(item);
    arr.shift();
    return arr;
}
var arrayOne = [1, 2, 3, 4, 5, 6];
console.log(nextInline(arrayOne, 7));
console.log("before: " + arrayOne);
console.log("After: " + nextInline(arrayOne, 7));