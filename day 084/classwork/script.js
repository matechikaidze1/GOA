const products = [
    {
        name: "headset",
        description: "comfortable headset.",
        price: "₾120",
        image: "https://via.placeholder.com/300x200?text=headset"
    },
    {
        name: "laptop bag",
        description: "a leather bag for storing your laptop",
        price: "₾250",
        image: "https://via.placeholder.com/300x200?text=laptopbag"
    },
    {
        name: "smartphone",
        description: "a new smartphone with cool cameras.",
        price: "₾1500",
        image: "https://via.placeholder.com/300x200?text=smartphone"
    }
];

const productContainer = document.getElementById('productContainer');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <button>ყიდვა</button>
    `;

    productContainer.appendChild(card);
});
