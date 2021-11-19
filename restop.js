// it reduces an array to a single value
function addition(...args) {
    return args.reduce((num1, num2) => {
        return num1 + num2;
    });
}
console.log(addition(4, 5, 7));