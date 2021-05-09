let module1 = require('./module1.js');
let module2 = require('./module2.js');
let module3 = require('./module3.js');

console.log('Age: ' + module1.age);
console.log('Full Name: ' + module1.fullName);
console.log('Price: ' + module1.price);

console.log('Generate Random: ' + module2.generateRandom());
console.log('Sum: ' + module2.sum(1, 2));

let product = new module3.Product('p01', 'name 1', 5, 2);
console.log(product.toString());
console.log('Total: ' + product.total());
