// condition ? statement-if-true: statement-if-false;
function checkGreater(a, b) {
    return a > b ? 'the first number is greater' : 'The second number is greater';
}
console.log(checkGreater(56, 89));

//conditional tenary operator
function checkNumbers(numb) {
    return numb > 0 ? "It is a positive number" : numb < 0 ? " It is a negative number" : "It is 0";
}
console.log(checkNumbers(-0));

//read only variables are const.