let myForm = document.querySelector('form')
console.log(myForm)
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("form submitted")

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let formData={};

    inputBox.forEach((input)=>{
        console.log(input.value)
        formData[input.name]=input.value
    })

    console.log(formData)

    localStorage.setItem('userData',JSON.stringify(formData))

    alert("User Register Successfully")

    window.location.href='./Login.html'

})