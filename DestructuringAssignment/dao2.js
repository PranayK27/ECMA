let animal = {
    dog: 'Dog 1',
    cat: {
        bigger: 'Cat 1',
        smaller: 'Cat 2'
    },
    turtle: 'Turtle 1'
};

const { dog, turtle } = animal;
console.log(dog + ', ', turtle);

const { bigger, smaller } = animal.cat;
console.log(bigger + ', ' + smaller);
