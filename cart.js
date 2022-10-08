
//remove items


let removeCartItem = document.getElementsByClassName('qty-plus')
console.log(removeCartItem)
for (let i = 0; i < removeCartItem.length; i++) {
    let button = removeCartItem[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
