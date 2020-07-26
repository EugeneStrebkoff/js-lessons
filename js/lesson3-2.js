let iphone = 999;
let samsung = 888;
let xiaomi = 100;
let siemens = 13;
let basket = [iphone, samsung, xiaomi, siemens];

function countBasketPrice(box) {
    let sum = 0;
    for (let i = 0; i < box.length; i++) {
        sum += box[i];
    }
    return sum;
}