function Product(name, price) {
    this.name = name;
    this.price = price;

    this.getDetails = function() {
        console.log("product: " + this.name + ", price: " + this.price + " USD");
    };
}

const product = new Product('cool product', 999);
product.getDetails();
