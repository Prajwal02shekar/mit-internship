//? Synatx of Promise

// new Promise((resolve, reject) => {
//     resolve("Resolved State");
//     reject("Reject State")
// }).then((reponse)=>{
//     console.log(reponse)
// }).catch((err)=>{
//     console.log(err)
// }).finally(
//     console.log("I will be execute if it is reolved or reject")
// )


//? Example 2
//! Creating a Promise
// let p1=new Promise((res,rej)=>{
//     let isRoomCleaned=true;
//     if(isRoomCleaned){
//         res("Yes Room is cleaned")
//     }else{
//         rej("Room is not Cleaned")
//     }
// })

//! Handling a Promise
// p1.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err);
// })



// new Promise((res,rej)=>{
//     // res("Resolved")
//     rej("Rejected")
// }).then((dhanush)=>{
//     console.log(dhanush)
// }).catch((err)=>{
//     console.log(err)
// }).finally(
//     console.log("Finally Block")
// )


//? Promise Static Methods
//! Promise.all()
//! Promise.any()
//! Promise.allSettled()
//! Promise.race()


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 is resolved")
//         reject("p1 is rejected")
//     }, 2000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 is resolved")
//         reject("p2 is rejected")
//     }, 3000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p3 is resolved")
//         // reject("p3 is rejected")
//     }, 1000)
// })

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p4 is resolved")
//         reject("p4 is rejected")
//     }, 5000)
// })


// Promise.all([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })




// Promise.any([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// Promise.allSettled([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// Promise.race([p1, p2, p3, p4]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })



//? fetch()


// fetch('https://api.github.com/users')
// .then((res)=>{
//     console.log(res)
//     let data=res.json();
//     console.log(data)
//     data.then((respone)=>{
//         console.log(respone)

//         for(let i=0;i<respone.length;i++){
//             console.log(respone[i].login)
//         }
//     }).catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })




// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     console.log(res)
//     let userData=res.json()
//     console.log(userData)
//     userData.then((user)=>{
//         console.log(user)

//         user.forEach((u)=>{
//             console.log(u.id)
//             console.log(u.name)
//             console.log(u.email)
//         })


//     })
// }).catch((err)=>{
//     console.log(err)
// })




// fetch('https://fakestoreapi.com/products')
//     .then((res) => {
//         console.log(res)
//         let productsData = res.json()
//         console.log(productsData)
//         productsData.then((product) => {
//             console.log(product)

//             product.map((prod) => {
//                 console.log(prod.title)
//                 console.log(prod.price)

//             })
//         }).catch((err) => {
//             console.log(err)
//         })
//     }).catch((err) => {
//         console.log(err)
//     })



//! Assignment
// https://dummyjson.com/products



// fetch('https://dummyjson.com/products').then((res) => {
//     console.log(res)
//     let data = res.json()
//     console.log(data)
//     data.then((resp) => {
//         console.log(resp.products)

//         let details = resp.products

//         details.map((prod) => {
//             console.log(prod.title)
//             console.log(prod.price)

//         })


//     }).catch((err) => {
//         console.log(err)
//     })
// }).catch((err) => {
//     console.log(err)
// })


//! async and await

async function getUserData(){
    let res=await fetch('https://api.github.com/users')
    console.log(res)

    let data=await res.json()
    console.log(data)

    data.map((user)=>{
        console.log(user.login)
    })
}
getUserData()
