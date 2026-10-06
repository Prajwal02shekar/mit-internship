

// function wish(){
//     console.log("Good Afternoon All")
// }
// wish()


//? Function with parameter

// function add(n1,n2){
//     console.log(n1+n2)
// }

// add(10,20)


// function wish(username){
//     console.log(`Happy Birthday ${username}`)
// }
// wish("Gandhi Boss")


//? Function with return type


// function add(){
//     return 10+20
// }
// console.log(add())


// let res=add()
// console.log(res)


//? Function with parameter and return type

// function mul(n1,n2){
//     return n1*n2
// }

// let res=mul(5,5)
// console.log(res)


// console.log(mul(2,3))


//! Types of Functions [or] Ways to declare a functions
//? 1. Anonymous Function
// function(){
//     console.log("Iam a anonymous function")
// }
//? 2. Named Function
// function wish(){
//     console.log("Good Afternoon All")
// }
// wish()

//? 3. Function with Expression

// let fun=function(){
//     console.log("Iam a anonymous function")
// }
// fun()
// let greeting=function wish(){
//     console.log("Good Afternoon All")
// }
// greeting()
//? 4. First Class Function [or] First Citizen Function [or] First Order Function
// let fun=function(){
//     console.log("Iam a anonymous function")
// }
// fun()
// let greeting=function wish(){
//     console.log("Good Afternoon All")
// }
// greeting()

//? 5. Immediate Invoke Function Expression [IIFE]

// (function wish(){
//     console.log("HEllo All")
// })();

// (function(){
//     console.log("Iam a anonymous function")
// })()
//? 6. Arrow Function
// let arrFun=()=>{
//     console.log("Iam a arrow function")
// }
// arrFun()

//! Implicit return

// let add=(a,b)=>a+b

// console.log(add(10,5))
// //! Explicit return

// let sub=(n1,n2)=>{
//     return n1-n2
// }
// console.log(sub(25,3))

//? 7. Nested Function

// function parent(){
//     console.log("Iam a parent function")

//     function child(){
//         console.log("Iam a child function")
//     }
//     child()

// }
// parent()

//! Javascript Closure
// function parent() {
//     console.log("Iam a parent function")
//     let n1 = 10;
//     let n2 = 20
//     console.log(n1)
//     console.log(n2)
//     function child() {
//         console.log("Iam a child function")
//         console.log(n1)
//         console.log(n2)
//         let n3=30;
//         console.log(n3)
//     }
//     child()
// }
// parent()

//! Javascript Currying
// function parent() {
//     console.log("Iam a parent function")

//     function child() {
//         console.log("Iam a child function")
//     }
//     return child
// }
// parent()()

//! Javascript currying with closure

function parent() {
    console.log("Iam a parent function")
    let n1 = 10;
    let n2 = 20
    console.log(n1)
    console.log(n2)


    function child() {
        console.log("Iam a child function")
        console.log(n1)
        console.log(n2)
        let n3=30;
        console.log(n3)
    }
    return child

}
// parent()()

//? 8. Higher Order Function [HOF]

//? 9. Call back Functions [CBF]

// function add(){
//     console.log(10+10)
// }
// function sub(){
//     console.log(20-10)
// }
// function mul(){
//     console.log(10*10)
// }
// function operation(task){
//     task()
// }
// operation(add)
// operation(mul)


function deposit(amount){
    console.log(`${amount} depositted `)
}
function withdraw(amount){
    console.log(`${amount} withdrawn `)
}
function transfer(amount){
    console.log(`${amount} transferred `)
}
function bank(amount,operation){
    operation(amount)
}

bank(1000,deposit)
bank(500,transfer)
bank(300,withdraw)
//? 10. Generator Functions