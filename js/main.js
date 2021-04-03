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
