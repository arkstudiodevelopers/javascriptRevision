// generate random fractions
function generateFractions() {
    return Math.random();
}
console.log(generateFractions());

//Random whole numbers
/**
 * math.random cannot be 1 but can be
 * math.floor rounds the number to the nearest whiole number
 * we can multipply the random fraction with a whole number
 * to generate random whole number.
 */
function generateWhole() {
    var i = Math.random() * Math.random();
    i = i * 35; //gives us random number between 0 to 35
    i = Math.floor(i);
    return i;
}
console.log(generateWhole());

// print random numbers between certain numbers
function generatePin(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generatePin(1000, 9999));

// convert string to integer
function converter(stri) {
    return parseInt(stri);
}
console.log(converter('89'));

//converting binary numbers or other base.
function convertBinary(stri) {
    return parseInt(stri, 2);
}
console.log(convertBinary('11100101010101010100011100'));