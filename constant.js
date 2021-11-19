//const key word vairables cannot change what so ever
const ourArray = [5, 6, 7, 8];
ourArray[0] = 1;
ourArray[1] = 2;
ourArray[2] = 3;
ourArray[3] = 4;
console.log(ourArray);
// this is how to change the values of a constant array

// how to prevent mutation in obects using oject.freeze

function freezeObj() {
    const nameOne = 'nick';
    Object.freeze(nameOne); // this prevents the object from being changed
    return nameOne;
}
console.log(freezeObj());