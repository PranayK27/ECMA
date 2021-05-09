class Product {

    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return 'Id: ' + this.id + '\nName: ' + this.name + '\nPrice: ' + this.price + '\nQuantity: ' + this.quantity;
    }

}

let product1 = new Product("p01", "name 1", 4, 2);
let product2 = new Product("p02", "name 2", 11, 3);
let product3 = new Product("p03", "name 3", 7, 8);
let product4 = new Product("p04", "name 4", 15, 3);

let products = new Set();
products.add(product1);
products.add(product2);
products.add(product3);
products.add(product4);

console.log('Product List');
products.forEach(p => {
    console.log(p.toString());
    console.log('--------------------------');
})

console.log('Product List');
for (let product of products) {
    console.log(product.toString());
    console.log('--------------------------');
}
