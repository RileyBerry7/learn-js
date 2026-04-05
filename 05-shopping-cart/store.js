
// Run Code Asynchronously
if (document.readState == 'loading') {
    document.addEventListener('DOMConentLoaded', ready);
} else {
    ready();
}


//--------------------------------------------------------
// READY 
function ready() {
    
    console.log('Hello Webpage :3');

    // Remove Cart Item Button Setup
    var buttons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', removeCartItem);
    }

    //--------------------------------------------------------
    console.log('#'.repeat(40));
    console.log('\n\n');
} // - END

// FUNCTIONS

//--------------------------------------------------------
// REMOVE CART ITEM    
function removeCartItem(event){
    // Listenter Function
    event.target.parentElement.parentElement.remove();
    updateCartTotal();
    console.log('Item Removed');
}


//--------------------------------------------------------
// UPDATE CART TOTAL
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