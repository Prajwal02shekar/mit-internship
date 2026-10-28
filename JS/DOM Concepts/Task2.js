
let myForm = document.querySelector('form')
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let userDetails = {}
    let inputBox = document.querySelectorAll('input')
    inputBox.forEach((input) => {
        userDetails[input.name] = input.value
    })
    console.log(userDetails)

    let myDetails = document.getElementById('myDetails')
    myDetails.innerHTML = `
        <img src="${userDetails.imageUrl}" alt="">
        <h2>Name: ${userDetails.username}</h2>
        <p>Email: ${userDetails.email}</p>
        <p>Password: ${userDetails.password}</p>
        <p>Ph Number :${userDetails.phNum}</p>
    `


})