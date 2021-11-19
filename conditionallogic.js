//if ststements

function checkEvenOrOdd(blue) {
    var tin;
    tin = blue % 2;
    if (tin == 0) {
        console.log("Even number");
    } else { console.log("odd number"); }
}
console.log(checkEvenOrOdd(90));
/** equality operator is ==
 * while strict equality operator === does type conversion
 * 
 */
function strictComparison(num) {
    var five;
    five = '5';
    if (num === five) { // change the comparison operator to tripple or double.
        console.log("the numbers are equal");
    } else { console.log("The numbers are not equal"); }
}
console.log(strictComparison(5));

// inequality operator, !=
// strict inequality operator !==

//comparison with logical operators
function logicalOperators(nums) {
    if (nums > 100) {
        console.log("The value is greater than 100");
    } else { console.log("the value is not greater than 100"); }
}
logicalOperators(40);
// less than operator
//&& represent and 
// || or operator.
/**
 * when using else if statements, the order is important
 * once the first condtion has been met, the rets of the
 * conditions will not be checked.
 */