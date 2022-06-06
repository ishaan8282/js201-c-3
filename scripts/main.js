
document.getElementById("form").addEventListener("submit", getuserdata)
// let obj = []
function getuserdata(event)
{
    event.preventDefault()

    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let walletmoney  = form.amount.value;

  let money =   document.getElementById("amount").value
  console.log(money)

    // console.log(name,email,address,walletmoney)

    let obj ={
        name : name,
        email : email,
        address : address,
        walletmoney : walletmoney,
        
    }
    // obj.push(name,email,address,walletmoney)
    // console.log(obj)
    localStorage.setItem("user",JSON.stringify(obj))
     localStorage.setItem("money",money)
    
}