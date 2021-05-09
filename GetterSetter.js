class Student {

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    toString() {
        return 'Id: ' + this.id + '\nName: ' + this.name;
    }

}

let student = new Student();
student.id = 'st01';
student.name = 'Name 1';
console.log('Student Info');
console.log(student.toString());
