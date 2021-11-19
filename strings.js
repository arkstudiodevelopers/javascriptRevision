let fName = "nick";
let lname = "Ojiem";
// the code abpve shows string declaration.
var longString = "This i\r s \"a very long \" string with quations in it."
    //The backslash before the quatations will not be printed. this is how to print quotaions.
console.log(longString);
/*A string can be sorounded by single qoutes or double qoutes,
this can be used as an escape sequence
*/
/*
code output
\' single qoute
\" double qoute
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
//concatenate strings.
let fstring = "This is an easy " + "topic to understand";
console.log(fstring);
var sString = " Too short to ";
sString += "jump over the fence";
console.log(sString);
fstring += sString;
console.log(fstring);

// finding the length of a string.
var lengthOfString = "How long is this string";
var number = lengthOfString.length;
console.log(number);
// bracket notation
let firstLetterOf_lengthOfString = lengthOfString[0];
console.log(firstLetterOf_lengthOfString); // this prints the first letter of the variable.
// strings are imutable, they cannot be altered once created.
// you cannot change a single character of a string, just the entire string.
/*
Bracket notation to find the nth character of a string
*/
// find the last charcter in any string.
var findLast_character = "I want the last character of this string";
let lenngthof_findLast_character = findLast_character.length;
var lastCharacter = findLast_character[lenngthof_findLast_character - 1];
console.log(lastCharacter);
/*
word blanks
*/
function firstFunction(myName, myLocation, theYear) {
    var results;
    results = myName + " lived in " + myLocation + " during " + theYear;
    return results;
}
console.log(firstFunction("Nick ", " Kisumu ", " 2017"));
console.log(firstFunction("Jack", "Nakuru", "2018"));