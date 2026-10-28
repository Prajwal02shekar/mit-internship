async function getProducts(){
        let productsResponse=await fetch('https://dummyjson.com/products')
        console.log(productsResponse)

       let productsData=await productsResponse.json()
       console.log(productsData.products)


       let section=document.createElement('section')
       document.body.appendChild(section)

       productsData.products.map((prod)=>{
        console.log(prod)

        let aside=document.createElement('aside');
        section.appendChild(aside)

        let h2=document.createElement('h2')
        h2.innerText=`${prod.title}`

        let img=document.createElement('img')
        img.src=`${prod.images[0]}`

        let p=document.createElement('p')
        p.innerText=`$ ${prod.price}`

        let button=document.createElement('button')
        button.innerText="Add to Cart"

        aside.append(h2,img,p,button)
       })
}
getProducts()