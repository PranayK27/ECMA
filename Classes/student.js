var Human = require('./human');

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

module.exports = Student;
