function student(first, graded, location) {
    this.fname = first;
    this.grade = graded;
    this.location = location;
}
const firstStudent = new student('john doe', 'B+', 'Nairobi');
console.log(firstStudent.grade);