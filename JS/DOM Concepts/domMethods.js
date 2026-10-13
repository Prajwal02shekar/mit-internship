//? getElementById()

// let h1Tag=document.getElementById('head1')
// h1Tag.style.color="red"
// h1Tag.style.backgroundColor="black"


// console.log(h1Tag)


// let pTag=document.getElementById('para')
// console.log(pTag)


//? getElementByClassName()
// let pElement=document.getElementsByClassName('para')
// console.log(pElement)
// console.log([pElement[0]])
// console.log([pElement[1]])
// console.log([pElement[2]])


// for(let i=0;i<pElement.length;i++){
//     console.log(pElement[i])
//     pElement[i].style.backgroundColor="red"
//     pElement[i].style.color="white"

// }


//? getElementByTagName()

// let h2=document.getElementsByTagName('h2')

// console.log(h2)

// let p=document.getElementsByTagName('p')
// console.log(p)
// for(let i=0;i<p.length;i++){
//     console.log(p[i]);
//     p[i].style.backgroundColor="red"
//     p[i].style.color="white"
// }


//? querySelect()
// let h1=document.querySelector('#head1')
// console.log(h1)

// let ele=document.querySelector('h1')
// console.log(ele)

//? querySelectAll()

// let p=document.querySelectorAll('.para')
// console.log(p)



// p.forEach((ele)=>{
//     console.log(ele)
// })



let para=document.querySelectorAll('p')
console.log(para)
para.forEach((ele)=>{
    console.log(ele)
})