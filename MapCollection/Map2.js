var student = new Map();
student.set('id', 'st01');
student.set('name', 'Name 1');
student.set('age', 20);

console.log('Student Info');
student.forEach((value, key) => {
    console.log(key + ': ' + value);
});

let product = new Map([
    ['id', 'p01'],
    ['name', 'name 1'],
    ['price', 100]
]);

console.log('Product Info');
product.forEach((value, key) => {
    console.log(key + ': ' + value);
});
