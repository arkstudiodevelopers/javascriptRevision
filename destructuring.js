var objectOne = { 'a': 3.142, 'b': 56, 'c': 45 }
    //to store the properties a,b,c to diferent variables do
var { a: X, b: y, c: z } = objectOne;
console.log(X, y, z);

// assigning variables from arrays
var [a, b, , c] = [12, 34, 45, 56, 67];
console.log(a, b, c);

// using destructuring to switch the numbers of two variables
var numbOnev = 56;
var numbTwo = 89;
[numbOnev, numbTwo] = [numbTwo, numbOnev];
console.log(numbOnev, numbTwo);

//using destructuring with assignment with the rest operator
//remove first two or more numbers/ ellements in an array
var myArray = ['nick', 'chris', 'don', 'andy', 'grace'];

function removeEllement() {
    const [, , ...arr] = myArray;
    return arr;
}
const arr = removeEllement(myArray);
console.log(arr);