class King {

    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    getDescription() {
        return `${this.name} leads ${this.country}`;
    }

}

var details = ['Name 1', 'Country 1'];
var king = new King(...details);
console.log(king.getDescription());
