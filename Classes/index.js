var Student = require('./student');
var Employee = require('./employee');

console.log('Student Info');
let student = new Student("name 1", "male", "st01", 7.8);
console.log(student.toString());

console.log('Employee Info');
let employee = new Employee("name 2", "female", "e01", 123);
console.log(employee.toString());
