document.body.onload = printCatalog;

let catalog = [];

class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        catalog.push(this);
    }
}

let samsung = new Product('Samsung', 999);
let iphone = new Product('iPhone', 1299);
let xiaomi = new Product('Xiaomi', 100);


class Cart {
    constructor(){
    }

    addToCart(product){
        this.cart.push(product);
        let     
    }
    
    delFromCart(product){
        this.cart.splice(cart.indexOf(product), 1);
    }
}

function printCatalog() {
    let catalogDiv = document.querySelector('.catalog');
    catalog.forEach(element => {
        let productDiv = document.createElement('div');
        let btnBuy = document.createElement('button');
        btnBuy.classList.add('btn-buy');
        btnBuy.onclick = function () {
            cart.addToCart(element);
        };
        btnBuy.innerText = 'Купить';
        productDiv.innerHTML = `<p>Наименование товара: ${element.name}</p><p>Стоимость товара ${element.cost} руб.`;
        catalogDiv.appendChild(productDiv);
        catalogDiv.appendChild(btnBuy);
    });
}

function printCart() {
    let cartDiv = document.querySelector('.cart');
    let cartSum = document.createElement('div');
    cartSum.classList.add('.cart-sum');
    cartSum.innerHTML = ``
    cartDiv.appendChild(cartSum);
}