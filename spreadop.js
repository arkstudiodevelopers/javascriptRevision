// it expands an existing array.
// makes a copy of the array
var arrayOne = ['nick', 'john', 'dixon'];
var arrayTwo;
var arrayThree;

function makeCopy() {
    arrayTwo = [...arrayOne]; //makes a copy of array one to two
    arrayThree = arrayOne;
    arrayOne[0] = 'Doe';
    return arrayThree;
}
console.log(makeCopy());