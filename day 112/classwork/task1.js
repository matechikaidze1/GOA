class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    displayProduct() {
        return <div class='item'>
        <div class='item-name'>${this.name}</div>
        <div class='item-price'>${this.price}</div>
        </div>
    }
}

class SpecialItem extends Product {
    constructor(name, price, discount) {
        super(name, price)
        this.discount = discount
    }
    displayProduct() {
        return <div class='item'>
        <div class='item-name'>${this.name}</div>
        <div class='item-price'>
        <span style="text-decoration: line-through;">$${this.price}</span> 
        $${this.price - this.discount}</div>
        </div>
    }
}

class Store {
    constructor(arr) {
        this.items = arr
    }
    render() {
        let main = document.getElementById("item-list");
        this.items.forEach(item => {
            main.innerHTML += item.displayProduct()
        });
    }
}


const items = [
    new Product("Laptop", 999),
    new Product("Phone", 699),
    new SpecialItem("Headphones", 150, 20),
    new Product("Earbods", 99),
    new Product("20In TV (TECHNOBOOM)", 999),
    new SpecialItem("Charger", 100, 1)
];


new Store(items).render()
