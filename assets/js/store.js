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

const el = document.querySelector('#cart');
var price = el.price

console.log(price)

}