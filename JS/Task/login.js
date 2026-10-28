let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault()

    let UserEmail=document.getElementById('email').value
    let UserPassword=document.getElementById('password').value


    let storedData=JSON.parse(localStorage.getItem('userDetails'))
    console.log(storedData)

    if(storedData){
        if(UserEmail===storedData.email && UserPassword===storedData.password){
            alert("Login Successfull")
            window.location.href='./homaPage.html'
        }else{
            alert("Invalid Details")
        }
    }

    console.log(UserEmail,UserPassword)
    console.log("Form Submitted")
}