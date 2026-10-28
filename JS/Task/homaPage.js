let userData=JSON.parse(localStorage.getItem('userDetails'))
console.log(userData)

let imageBlock=document.getElementById('imageBlock')
console.log(imageBlock)
imageBlock.src=`${userData.imageUrl}`