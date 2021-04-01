//like button

function toggleClass(el) {
    if(el.className =='far fa-heart'){
    el.className ='fas fa-heart'
    }else{
        el.className ='far fa-heart'
    }


}// remove item from cart
function removeCartRow (removeEvent){
    var removeButtonClicked = removeEvent.target
    removeButtonClicked.parentElement.parentElement.parentElement.parentElement.remove()
}
var removeItemButtons = document.getElementsByClassName('remove-item')
                    // console.log(removeItemButtons)
for(var i = 0; i < removeItemButtons.length; i++) {
    var removeButton = removeItemButtons[i]
    removeButton.addEventListener('click', removeCartRow)
}

//adjust quantity

var plusValue = document.getElementsByClassName('plus-button')
var minusValue = document.getElementsByClassName('minus-button')
        var quantityOfItems = document.getElementsByClassName('item-quantity')
for(var i = 0; i < plusValue.length; i++){
    var button = plusValue[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        var input = buttonClicked.parentElement.children[1]
        var inputValue = input.innerText
        var newValue = parseInt(inputValue) + 1
        input.innerHTML = newValue
        
    })
    var quantityChange = quantityOfItems[i]
    
    quantityChange.addEventListener('click', function(action){
        var newVal = action.target
        
        console.log(newVal)
    })
}
for(var i = 0; i < minusValue.length; i++){
    var button = minusValue[i]
    
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        var input = buttonClicked.parentElement.children[1]
        var inputValue = input.innerHTML;
        var newValue = parseInt(inputValue) - 1
        
        
        if(newValue >= 1 ){
            input.innerHTML = newValue
        }else{
            input.innerHTML == 1
        }
    
    })
}

// calculate sub price + total price
var itemSinglePrices = document.getElementsByClassName('item-price')
var quantityOfItems = document.getElementsByClassName('item-quantity')
var itemSubTotals = document.getElementsByClassName('item-sub-total')
var totalCart = document.getElementById('cart-total-price')
var summed = 0

for(var i = 0; i < quantityOfItems.length; i++){
    
    var itemSinglePrice = itemSinglePrices[i]
    var valueOfItemSinglePrice = parseFloat(itemSinglePrice.innerText)
    
    var quantityOfItem = quantityOfItems[i]
    var valueOfItemQuantity = parseInt(quantityOfItem.innerText)
    
    var newSubTotal = valueOfItemSinglePrice * valueOfItemQuantity
    var newSubTotalDecimal = newSubTotal.toFixed(2)
   
    summed = summed + newSubTotal
  
    var itemSubTotal = itemSubTotals[i]
    itemSubTotal.innerHTML = newSubTotalDecimal
    
    
    var convToNum = parseInt(itemSubTotals[i].innerText)
    
    totalCart.innerHTML = summed.toFixed(2)
    
}
