class Product {

    constructor(id, name, price, quantity, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }

    total() {
        return this.price * this.quantity;
    }

    toString() {
        return 'Id: ' + this.id + '\nName: ' + this.name + '\nPrice: ' + this.price + '\nQuantity: ' + this.quantity + '\nStatus: ' + this.status;
    }

}

let product1 = new Product();
product1.id = 'p01';
product1.name = 'name 1';
product1.price = 5.6;
product1.quantity = 4;
product1.status = true;
console.log('Product 1 Info');
console.log(product1.toString());
console.log('Total: $' + product1.total());

let product2 = new Product('p02', 'name 2', 5, 2, false);
console.log('Product 2 Info');
console.log(product2.toString());
console.log('Total: $' + product2.total());
