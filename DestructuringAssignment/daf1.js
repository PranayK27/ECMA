function showInfo({ firstName, lastName, age }) {
    return `Name: ${firstName} ${lastName}
            Age: ${age}`;
}

const person = {
    firstName: 'John',
    lastName: 'Thomas',
    age: 18
}

console.log(showInfo(person));

//destructuring assignment with functions
