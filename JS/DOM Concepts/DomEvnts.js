// let btn=document.querySelector('button')
// console.log(btn)

// // btn.addEventListener('click',()=>{
// //     console.log("Btn Clicked")
// // })


// let h1=document.querySelector('h1')
// console.log(h1)


// // h1.onclick=()=>{
// //     console.log("H1 Clicked")
// // }


// //? dbclick

// // btn.ondblclick=()=>{
// //     console.log("DB Click triggred")
// // }


// // h1.addEventListener('dblclick',()=>{
// //     console.log("h1 db ")
// // })


// //? mouse events


// // btn.addEventListener('mouseover',()=>{
// //     console.log("Mouse over triggred")
// // })

// // btn.addEventListener('mouseout',()=>{
// //     console.log("Mouse ot triggred")
// // })


// // h1.onmouseover=()=>{
// //     console.log('Mouse over triggred')
// // }
// // h1.onmouseout=()=>{
// //     console.log('Mouse out triggred')
// // }


// //? keyboard events

// // window.addEventListener('keydown',()=>{
// //     console.log("KEY DOWN")
// // })

// // window.addEventListener('keyup',()=>{
// //     console.log("KEY UP")
// // })



// window.onkeyup=()=>{
//      console.log("KEY UP")
// }
// window.onkeydown=()=>{
//      console.log("KEY DOWN")
// }


//? Form Events

let myForm=document.querySelector('form')
console.log(myForm)
// myForm.addEventListener('submit',(e)=>{
//      e.preventDefault()
//      console.log("form submitted")
// })


myForm.onsubmit=(e)=>{
     e.preventDefault()

     let username=document.querySelectorAll('input')[0]
     let email=document.querySelectorAll('input')[1]
     
     let password=document.querySelectorAll('input')[2]

     console.log(username.name +":"+ username.value)
     console.log(email.name +":"+ email.value)

     console.log(password.name+":"+password.value)

     console.log("form submitted")

}