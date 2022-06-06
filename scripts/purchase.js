let money =  localStorage.getItem("money");

console.log(money)
let wallet_balance = document.getElementById("wallet_balance")

wallet_balance.append(money)




let purchased_vouchers = document.getElementById("purchased_vouchers")

let pur = JSON.parse(localStorage.getItem("purchase"))
console.log(pur)






    let div = document.createElement("div")

    let image = document.createElement("img")
           image.src = pur.image
   
    let name = document.createElement("h4")
    name.innerText = pur.name
   
    let price = document.createElement("h3")
    price.innerText = pur.price
   
    div.append(image,name,price)
   
    purchased_vouchers.append(div)
   
 

 