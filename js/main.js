//like button

function toggleClass(el) {
    if(el.className =='far fa-heart'){
    el.className ='fas fa-heart'
    }else{
        el.className ='far fa-heart'
    }

}


// vars

    var price1 = document.getElementById('price-1')
    var price2 = document.getElementById('price-2')
    var price3 = document.getElementById('price-3')
    var quant1 = document.getElementById('quant-1')
    var quant2 = document.getElementById('quant-2')
    var quant3 = document.getElementById('quant-3')
    var subTot1 = document.getElementById('tot-1')
    var subTot2 = document.getElementById('tot-2')
    var subTot3 = document.getElementById('tot-3')
    var total = document.getElementById('cart-total-price')
    var tot = 0
    var item1 = document.getElementById('item-1')
    var item2 = document.getElementById('item-2')
    var item3 = document.getElementById('item-3')
    console.log(item2,item3)
// calculate total    


function inc1 (){
    quant1.innerHTML=+quant1.innerHTML+1
    var subTotal1 =+ parseInt(subTot1.innerHTML)+parseInt(price1.innerHTML);
    subTot1.innerHTML = subTotal1.toFixed(2)
    tot =+ parseInt(total.innerHTML) + parseInt(price1.innerHTML)
    total.innerHTML = tot.toFixed(2)
}

function inc2 (){
    quant2.innerHTML=+quant2.innerHTML+1
    var subTotal2 =+ parseInt(subTot2.innerHTML)+parseInt(price2.innerHTML);
    subTot2.innerHTML = subTotal2.toFixed(2)
    tot =+ parseInt(total.innerHTML) + parseInt(price2.innerHTML)
    total.innerHTML = tot.toFixed(2)
}

function inc3 (){
    quant3.innerHTML=+quant3.innerHTML+1
    var subTotal3 =+ parseInt(subTot3.innerHTML)+parseInt(price3.innerHTML);
    subTot3.innerHTML = subTotal3.toFixed(2)
    tot =+ parseInt(total.innerHTML) + parseInt(price3.innerHTML)
    total.innerHTML = tot.toFixed(2)
}


function dec1 (){
    if (quant1.innerHTML==1){
        quant1.innerHTML=+quant1.innerHTML
        var subTotal1 =+ subTotal1
        subTot1.innerHTML = subTot1.innerHTML
        tot =+ tot.innerHTML
        total.innerHTML = total.innerHTML
      }else{
        quant1.innerHTML=+quant1.innerHTML-1
        var subTotal1 =+ parseInt(subTot1.innerHTML) - parseInt(price1.innerHTML);
        subTot1.innerHTML = subTotal1.toFixed(2)
        tot =+ parseInt(total.innerHTML) - parseInt(price1.innerHTML)
        total.innerHTML = tot.toFixed(2)
      }
}

function dec2 (){
    if (quant2.innerHTML==1){
        quant2.innerHTML=+quant2.innerHTML
        var subTotal2 =+ subTotal2
        subTot2.innerHTML = subTot2.innerHTML
        tot =+ tot.innerHTML
        total.innerHTML = total.innerHTML
      }else{
        quant2.innerHTML=+quant2.innerHTML-1
        var subTotal2 =+ parseInt(subTot2.innerHTML) - parseInt(price2.innerHTML);
        subTot2.innerHTML = subTotal2.toFixed(2)
        tot =+ parseInt(total.innerHTML) - parseInt(price2.innerHTML)
        total.innerHTML = tot.toFixed(2)
      }
}

function dec3 (){
    if (quant3.innerHTML==1){
        quant3.innerHTML=+quant3.innerHTML
        var subTotal3 =+ subTotal3
        subTot3.innerHTML = subTot3.innerHTML
        tot =+ tot.innerHTML
        total.innerHTML = total.innerHTML
      }else{
        quant3.innerHTML=+quant3.innerHTML-1
        var subTotal3 =+ parseInt(subTot3.innerHTML) - parseInt(price3.innerHTML);
        subTot3.innerHTML = subTotal3.toFixed(2)
        tot =+ parseInt(total.innerHTML) - parseInt(price3.innerHTML)
        total.innerHTML = tot.toFixed(2)
      }
}

function remove1(){
    item1.remove()
    tot =+ parseInt(total.innerHTML) - (parseInt(price1.innerHTML)*parseInt(quant1.innerHTML))
    total.innerHTML = tot.toFixed(2)

}

function remove2(){
    item2.remove()
    tot =+ parseInt(total.innerHTML) - (parseInt(price2.innerHTML)*parseInt(quant2.innerHTML))
    total.innerHTML = tot.toFixed(2)

}

function remove3(){
    item3.remove()
    tot =+ parseInt(total.innerHTML) - (parseInt(price3.innerHTML)*parseInt(quant3.innerHTML))
    total.innerHTML = tot.toFixed(2)

}

function cancel(){
    item1.remove()
    item2.remove()
    item3.remove()
    tot = 0
    total.innerHTML = tot.toFixed(2)

}


function thx (){
    if(total.innerHTML == 0.00){
        alert('You have to select at least one item to buy')
    }else{

    item1.remove()
    item2.remove()
    item3.remove()
    tot = 0
    total.innerHTML = tot.toFixed(2)
    alert('Thank you for you purchase come back soon')
}}
