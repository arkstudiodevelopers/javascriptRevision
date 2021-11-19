var students = [{
        'name': 'nick',
        'age': 24,
        'school': "MMU",
        'contact': '0799334456'
    },
    {
        'name': 'Victor',
        'age': 25,
        'school': 'UON',
        'contact': '0788332211'
    },
    {
        'name': 'Dixon',
        'age': 23,
        'school': 'JKUAT',
        'contact': '0788996644'
    }
];

function lookUp(fname) {
    for (i = 0; i < 3; ++i) {
        if (students[i].name == fname) {
            return console.log(students[i]);
        }
    }
    return ' student not found';
}
console.log(lookUp('Doe'));