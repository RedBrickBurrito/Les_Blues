var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for(var i= 0; i < removeCartItemButtons.length;i++)
{
  var button = removeCartItemButtons[i]
  button.addEventListener('click',function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove() 
    updateCartTotal()
  })
}

function updateCartTotal() {

var cartItemContainer = document.getElementsByClassName('table table-hover table-condensed')[0]


console.log(price)

}