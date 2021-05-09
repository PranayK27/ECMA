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

    total() {
        return this.price * this.quantity;
    }

}

module.exports = Product;
