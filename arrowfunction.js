// arrow functions are annonimuos functions, without names.
var fnames = function() {
    return 'nick';
};
console.log(fnames());
/**
 * the above function
 * is same as
 * the arrow function shown below
 */
var snames = () => { return 'nick' };

//convert the function below to an arrow function
let magic = function(one, two) {
    return one.concat(two);
}
console.log(magic([1, 2, 3, 4], [5, 6, 7, 8]));

//the conversion
let magicTwo = (three, four) => three.concat(four);
console.log(magicTwo([1, 2, 3, 4], [5, 6, 7, 8]));

// higher order functions