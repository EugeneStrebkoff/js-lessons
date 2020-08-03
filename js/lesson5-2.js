class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

let samsung = new Product('Samsung', 999);
let iphone = new Product('iPhone', 1299);
let xiaomi = new Product('Xiaomi', 100);

let cart = [];

function sumOfCart(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].cost;
    }
    let cartBlock = document.querySelector('.cart');
    if (cart.length === 0) {
        cartBlock.innerHTML = 'Корзина пуста';
    } else {
        cartBlock.innerHTML = `В корзине: ​${cart.length} ​товаров на сумму ${sum} ​рублей`;
    }

}

function addToCart(product) {
    cart.push(product);
}

function deleteToCart(product) {
    cart.pop(product);
}