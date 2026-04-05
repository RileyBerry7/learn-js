console.log('Hello Webpage :3');

// Remove Cart Item Buttons
var buttons = document.getElementsByClassName('btn-danger');
// console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function(event){
        // Listenter Function
        event.target.parentElement.parentElement.remove();
        updateCartTotal();
        console.log('Item Removed');
    });
}

//--------------------------------------------------------
console.log('#'.repeat(40));
console.log('\n\n');


// FUNCTIONS

function updateCartTotal() {
    // Returns A list of divs
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    // Extracts all 'Cart Rows' which are divs
    var cartRows          = cartItemContainer.getElementsByClassName('cart-row');
    var total             = 0;  

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow      = cartRows[i];
        var priceElem    = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElem = cartRow.getElementsByClassName('cart-quantity-input')[0]; 
        var price        = parseFloat(priceElem.innerText.replace('$', ''));
        var quantity     = quantityElem.value;
        total = total + (price * quantity);

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}