
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

    // Remove From Cart Setup
    var buttons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Quantity Input Setup
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    // Add To Cart Setup
    var buttons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', addToCart);
    }

    //--------------------------------------------------------
    console.log('#'.repeat(40));
} // ready - END


//########################################################
// FUNCTIONS

//--------------------------------------------------------
// ADD ITEM TO CART
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    //
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    } 
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src=${imageSrc} width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
}

//--------------------------------------------------------
// ADD TO CART - BUTTON
function addToCart(event) {
    var button   = event.target;
    var shopItem = button.parentElement.parentElement;
    var title    = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price    = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

    addItemToCart(title, price, imageSrc);
    updateCartTotal();
    console.log('Item Added');
} 

//--------------------------------------------------------
// QUANTITY CHANGED
function quantityChanged(event) {
    var input = event.target;
   
    // Invalid Quantity
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

//--------------------------------------------------------
// REMOVE CART ITEM    
function removeCartItem(event){
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
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}