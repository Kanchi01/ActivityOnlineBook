
var shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
}

function removeFromCart(item) {
    var index = shoppingCart.indexOf(item);
    if (index > -1) {
        shoppingCart.splice(index, 1);
    }
}

function emptyCart() {
    shoppingCart = [];
}

function checkout() {
    // your code here
}