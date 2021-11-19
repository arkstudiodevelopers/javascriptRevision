let firstArray = ["nick", 24, "kisumu"];
console.table(firstArray);
// multidimentianal array
let secondArray = [
    ["nick", "24"],
    ["don", "26"]
];
console.table(secondArray);

//how to access Array data with indexes.
console.log(secondArray[0]);
console.log(firstArray[0]); // gets the first entry

//modify array data with indexes.
let thirdArray = [1, 2, 3, 4, 5];
console.log(thirdArray);
thirdArray[3] = 10;
console.log(thirdArray);

// access an array within an array
secondArray[0][0] = "Ojiem";
console.log(secondArray);

//manipulation of arrays with push
/*
this will
add an array into another array
*/
var fourthArray = [12, 23, 34, 45];
secondArray.push(fourthArray);
console.log(secondArray);

//manipulation of arrays with pop
/*
this is used to remove an ellemnt from an array, the last item
*/
fourthArray.pop();
console.log(fourthArray);

//manipulation of arryas using shift
/*
this removes the first ellement of the array
*/
fourthArray.shift();
console.log(fourthArray);

// manipulate arrays with uunshift
/**
 * this will add
 * add arrays in the beginning of the array
 */
fourthArray.unshift(34);
console.log(fourthArray);

//nested arrays