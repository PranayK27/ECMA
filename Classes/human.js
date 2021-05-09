class Human {

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    toString() {
        return 'Name: ' + this.name + '\nGender: ' + this.gender;
    }

}

module.exports = Human;
