function Cart() {
    this.items = [];

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.getItems = function() {
        console.log("items in cart:", this.items);
    };
}

const myCart = new Cart();
myCart.addItem('gun');
myCart.addItem('water');
myCart.getItems();
``
