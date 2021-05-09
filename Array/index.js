console.log('***************************** START ************************************');
console.log('All Commented Section work fine, try to uncomment one at a time to test functionality');
// let Product = require('./product');
//
// let product1 = new Product("p01", "name 1", 4, 2);
// let product2 = new Product("p02", "name 2", 11, 3);
// let product3 = new Product("p03", "name 3", 7, 8);
//
// let products = [product1, product2, product3];

// console.log('***************************** count ************************************');
// let result1 = products.length;
// console.log('Result 1: ' + result1);
//
// let result2 = products.filter(p => p.price > 5).length;
// console.log('Result 2: ' + result2);
//
// console.log('***************************** min and max ************************************');
//
// let maxInfo = products.reduce((p, q) => p.price > q.price ? p : q)
// console.log('Product Max Info');
// console.log(maxInfo.toString());
// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// let minInfo = products.reduce((p, q) => p.price < q.price ? p : q)
// console.log('Product Min Info');
// console.log(minInfo.toString());
//
//
// console.log('***************************** Limit ************************************');
//
// console.log('Use Limit');
// products.slice(0, 2) //shows 0th and 1st
//     .forEach(function (product, index) {
//         console.log(product.toString());
//         console.log('------------------------');
//     });
//
// console.log('Use Limit and Order By');
// products.sort((p, q) => p.price - q.price <= 0)
//     .slice(0, 2)
//     .forEach(function (product, index) {
//         console.log(product.toString());
//         console.log('------------------------');
//     });
//
// console.log('Use Limit and Where and Order By');
// products.filter(p => p.price > 2)
//     .sort((p, q) => p.price - q.price <= 0)
//     .slice(0, 1) //shows 0th element
//     .forEach(function (product, index) {
//         console.log(product.toString());
//         console.log('------------------------');
//     });


// console.log('***************************** Sort ************************************');
// console.log('Ascending Order');
// products.sort((p, q) => p.price - q.price >= 0)
//         .forEach(function (product, index) {
//         console.log(product.toString());
//         console.log('Total: ' + product.total());
//         console.log('------------------------');
//     });
//
// console.log('Descending Order');
// products.sort((p, q) => p.price - q.price <= 0)
//         .forEach(function (product, index) {
//         console.log(product.toString());
//         console.log('Total: ' + product.total());
//         console.log('------------------------');
//     });

// console.log('***************************** Concat ************************************');
//
// let product4 = new Product("p04", "name 4", 15, 3);
// products = products.concat(product4);
//
// products.forEach(function (product, index) {
//     console.log("Product " + index + ' Info');
//     console.log(product.toString());
//     console.log('Total: ' + product.total());
//     console.log('------------------------');
// });
//

// console.log('***************************** Map ************************************');
//
// let result1 = products.map(p => p.price * p.quantity)
//     .reduce((p, q) => p + q);
// console.log('Result 1: ' + result1);
//
// let result2 = products.filter(p => p.price > 5)
//     .map(p => p.price * p.quantity)
//     .reduce((p, q) => p + q);
// console.log('Result 2: ' + result2);

// console.log('***************************** Reduce ************************************');
//
// //gives the result that is sum of all the product quantities without pre-increment
// let result1 = products.reduce((a, b) => +a + +b.quantity, 0);
// console.log('Result 1: ' + result1);
//
// let result2 = products.reduce((a, b) => +a + +b.quantity * +b.price, 0);
// console.log('Result 2: ' + result2);

// console.log('***************************** Find ************************************');
//
// let productInfo = products.find(p => p.id === 'p03');
//
// console.log(productInfo.toString());
// console.log('Total: ' + productInfo.total());
//
// console.log('***************************** Like ************************************');
//
// let Product = require('./product');
//
// let product1 = new Product("p01", "laptop 1", 4, 2);
// let product2 = new Product("p02", "laptop 2", 11, 3);
// let product3 = new Product("p03", "computer 1", 7, 8);
//
// let products = [product1, product2, product3];
//
// console.log("Starts With");
// products.filter(p => p.name.startsWith("lap"))
//     .forEach(function (product, index) {
//         console.log("Product " + index + ' Info');
//         console.log(product.toString());
//         console.log('------------------------');
//     });
//
// console.log("Ends With");
// products.filter(p => p.name.endsWith("top 2"))
//     .forEach(function (product, index) {
//         console.log("Product " + index + ' Info');
//         console.log(product.toString());
//         console.log('------------------------');
//     });
//
// console.log("Contains");
// products.filter(p => p.name.includes("puter"))
//     .forEach(function (product, index) {
//         console.log("Product " + index + ' Info');
//         console.log(product.toString());
//         console.log('------------------------');
//     });


// console.log('***************************** Filter ************************************');
//
// let result = products.filter(p => p.price > 5);
// result.forEach(function (product, index) {
//     console.log("Product " + index + ' Info');
//     console.log(product.toString());
//     console.log('Total: ' + product.total());
//     console.log('------------------------');
// });

//
// console.log('***************************** Loops ************************************');
//
// let Product = require('./product');
//
// let product1 = new Product('p01', 'name 1', 5, 2);
// let product2 = new Product('p02', 'name 2', 11, 6);
// let product3 = new Product('p03', 'name 3', 21, 5);
//
// let products = [product1, product2, product3];
//
// console.log('Product List');
// for (const product of products) {
//     console.log(product.toString());
//     console.log('Total: ' + product.total());
//     console.log('===========================');
// }
//
// console.log('Product List');
// for (const index in products) {
//     console.log(products[index].toString());
//     console.log('Total: ' + products[index].total());
//     console.log('===========================');
// }



// console.log('***************************** Loops 2 ************************************');
//
// const names = ['Name 1', 'Name 2', 'name 3', 'Name 4'];
//
// console.log('Name List');
// for (const index in names) {
//     console.log(index + ': ' + names[index]);
// }
//
// console.log('Name List');
// for (const name of names) {
//     console.log(name);
// }


console.log('***************************** END ************************************');
