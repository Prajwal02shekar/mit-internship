let myForm=document.querySelector('form')
console.log(myForm)
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Form Submitted")


    let userData={}

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)
    inputBox.forEach((input)=>{
        console.log(input)
        userData[input.name]=input.value
    })
    console.log(userData)

    localStorage.setItem('userDetails',JSON.stringify(userData))
    alert("User Registered Successfully")

    window.location.href='./login.html'
})