console.log('Hello Webpage :3');

// Remove Cart Item Buttons
var buttons = document.getElementsByClassName('btn-danger');
// console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function(event){
        // Listenter Function
        console.log('Clicked');
        event.target.parentElement.parentElement.remove();
        console.log('Removed');
    });
}

//--------------------------------------------------------
console.log('#'.repeat(40));
console.log('\n\n');