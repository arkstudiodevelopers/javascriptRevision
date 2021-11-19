// it allows us to run one code multiple times
//while loop
var counter = 0;
while (counter < 7) {
    counter++;
    console.log(counter);
}
console.log(counter);

// for loop is the most common loop used in js.
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// using it on arrays
var ourArray = [];
for (j = 0; j < 5; ++j) {
    ourArray.push(j);
    console.log(ourArray);
}
// iterate odd numbers using forloop
4
5
6
7
8
for (i = 0; i <= 20; i++) {
    // let's divide the value by 2
    // if the remainder is not a zero then it's an odd number

    if (i % 2 != 0) {
        console.log(i);
    }
}
//console.log("these are the odd numbers");

//count backwards using for loop.
for (i = 100; i > 0; --i) {
    // console.log(i);
}

// iterate through an array eith for loop
var moreArray = [23, 45, 67, 89, 90, 101];

function iterateThrough(more) {
    for (i = 0; i <= more.length; ++i) {
        //check for number 101
        var checker = 101;
        if (checker == more[i]) {
            console.log("Found it in position " + i);
        }
    }
}
console.log(iterateThrough(moreArray));

// do while loop
var reduced = 59;
do {
    reduced = reduced - 1;

} while (reduced > 5);
console.log(reduced);