class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

let samsung = new Product('Samsung', 999);
let iphone = new Product('iPhone', 1299);
let xiaomi = new Product('Xiaomi', 100);

let cart = [samsung, iphone, xiaomi];

function sumOfCart(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length - 1; i++) {
        sum += cart[i].cost;
    }
    return sum;
}