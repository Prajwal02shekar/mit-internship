let myForm=document.querySelector('form')
console.log(myForm)

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let userEnteredEmail=document.getElementById('email').value
    let userEnteredPassword=document.getElementById('password').value

    console.log(userEnteredEmail)
    console.log(userEnteredPassword)


    let dataStored=JSON.parse(localStorage.getItem('userData'))
    console.log(dataStored)

    if(dataStored){
        if(userEnteredEmail===dataStored.email && userEnteredPassword===dataStored.password){
            alert('Login Successfull')
            window.location.href='./HomePage.html'
        }else{
            alert('Invalid Details')
        }
    }

})