//objects are similar to arrays except we use properties to access items.
var person = {
    "name": 'nick',
    "hands": 2,
    "legs": 1,
    "eyes": 2,
    "friends": ["jack", "suzan"]
}
console.table(person);

//accessing objects properties with dot notation
var first = person.name;
console.log(first);

// accessing objects with bracket notation
var second = person["hands"];
console.log(second);

//update object properties.
person.name = "john";
console.log(person);

// add new properties to an object
person.talks = true;
console.log(person);

//delete properites from objects
delete person.legs;
console.log(person);

// testing objects for properties
function checkForProperty(checkproperty) {
    if (person.hasOwnProperty(checkproperty)) {
        return person[checkproperty];
    } else { return "not found"; }
}
console.log(checkForProperty("eyes"));

//manipulating complex objects
//an array that has objects in it
var myArray = [{
        'artist': "Kendrick",
        'album': "DAMN",
        'age': 35,
        'format': ['CD', 'apple music', 'spotify']
    },
    {
        'artist': "J.cole",
        'album': "KOD",
        'age': 36,
        'format': ['CD', 'apple music', 'spotify']
    }
];