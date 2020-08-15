class Product {
    name = null;
    price = 0;
    count = 1;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    createProduct() {
        let block = document.querySelector('.main');
        let renderObject = document.createElement('div');
        renderObject.classList.add('product-block');
        renderObject.innerHTML = `
        <img src='#' alt='product-photo' width=30 height=20>
        <div>${this.name}</div>
        <div>${this.price}$</div>
        `
        block.appendChild(renderObject);
        renderObject.appendChild(this.btn());
    }

    btn() {
        let block = document.querySelector('.product-block');
        let btn = document.createElement('button');
        btn.classList.add('btn-buy');
        btn.innerText = 'Купить';
        btn.addEventListener('click', () => {
            CartInstance.add(this);
        })
        return btn;
    }

    inc() {
        this.count++;
    }

    dec() {
        this.count--;
    }
}

class List {
    items = []
    constructor() {


    }
    add(product) {
        this.items.push(product);
        this.render();
    }

    del() {

    }

    render() {}
}

class Cart extends List {
    constructor(){
        if(Cart._instance){
            return Cart._instance;
        }
        super();

        Cart._instance = this;
    }
    shown = false;
    render() {
        let header = document.querySelector('.header');
        let block = document.createElement('button');
        block.classList.add('cart-btn');
        block.innerText = 'Корзина';
        let cartDiv = document.createElement('div');
        cartDiv.classList.add('cart-block');
        if (!this.items.length){
            cartDiv.innerText = 'Корзина пока что пуста'
        } else {
            this.items.forEach(elem => function(){
                let itemBlock = document.createElement('div');
                itemBlock.innerText = `Товар: ${elem.name} по цене ${elem.price}$ в количестве ${elem.count} = ${elem.price * elem.count}$`;
                cartDiv.appendChild(itemBlock);
            })
        }
        header.appendChild(block);
        header.appendChild(cartDiv);
        this.btn();
    }

    btn() {
        let block = document.querySelector('.cart-btn');
        block.addEventListener('click', () => {
            let cartDiv = document.querySelector('.cart-block');
            if (!this.shown) {
                cartDiv.classList.add('shown');
                this.shown = true;
            } else {
                cartDiv.classList.remove('shown');
                this.shown = false;
            }

        })
    }
}

class Catalog extends List {
    constructor() {
        super();
    }

    render() {
        if (this.items) {
            this.items.forEach(element => element.createProduct())
        }
    }
}

const catalogList = new Catalog();

catalogList.add(new Product('1', 1));
catalogList.add(new Product('2', 2));
catalogList.add(new Product('3', 3));

catalogList.render();

const CartInstance = new Cart();
CartInstance.render();