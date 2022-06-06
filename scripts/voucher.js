let walletmoney = JSON.parse(localStorage.getItem("user"))

let money = JSON.parse(localStorage.getItem("money"))

console.log(money)
let wallet_balance = document.getElementById("wallet_balance")

wallet_balance.append(money)

// function appendmoney(walletmoney)
// {
//     walletmoney.map((el) =>{

//         let wallet = document.createElement("h3")
//         wallet.innerText = el.walletmoney 

//         console.log(wallet)
//     })


// }
// appendmoney(walletmoney)



let Api = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function getdata(){

    try{
          let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)

          let data = await res.json()

          let maindata =  data[0].vouchers
          console.log(maindata)
          append(maindata)
    }catch(err){
        console.log("err",err)
    }
    
}

getdata()

function append(maindata)
{
    // document.getElementById("voucher_list").innerHTML = null
    maindata.forEach((el) =>{

        let div1 = document.createElement("div")


        div1.setAttribute("class","voucher")
        // div1.style.height = "100px"
        // div1.style.width = "100px"

        let image = document.createElement("img")
        image.src = el.image

        let name = document.createElement("h4")
        name.innerText = el.name

        let price = document.createElement("h3")
        price.innerText = el.price


        let btn = document.createElement("button")
        btn.innerText =  "Buy"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",() =>{
            PurchasePage(el)
        })

        div1.append(image,name,price,btn)

        document.getElementById("voucher_list").append(div1)



    })
}

function PurchasePage(el)
{
    console.log(el)
   localStorage.setItem("purchase",JSON.stringify(el))
    // window.location.href= "purchase.html"
    // let total = money - el.price
    // console.log(total)
    if(el.price>money)
    {
     alert("Sorry! insufficient balance")
    }
    else
    {
        alert("Hurray! purchase successful")
        let newamount = money - el.price
        localStorage.setItem("money",newamount);
        window.location.reload()
    }
}

