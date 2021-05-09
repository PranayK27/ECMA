class Human {

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    toString() {
        return 'Name: ' + this.name + '\nGender: ' + this.gender;
    }

}

class Student extends Human {

    constructor(name, gender, id, score) {
        super(name, gender);
        this.id = id;
        this.score = score;
    }

    toString() {
        return super.toString() + '\nId: ' + this.id + '\nScore: ' + this.score;
    }

}

class Employee extends Human {

    constructor(name, gender, id, salary) {
        super(name, gender);
        this.id = id;
        this.salary = salary;
    }

    toString() {
        return super.toString() + '\nId: ' + this.id + '\nSalary: ' + this.salary;
    }

}

let student = new Student("name 1", "male", "st01", 7.8);
console.log('Student Info');
console.log(student.toString());

let employee = new Employee("name 2", "female", "e01", 123);
console.log('Employee Info');
console.log(employee.toString());
