let cart = JSON.parse(localStorage.getItem('cart')) || []
let cartCount = document.getElementById('cartCount')
cartCount.innerText = `${cart.length}`


let userData = JSON.parse(localStorage.getItem('userData'))
console.log(userData)

let profile = document.getElementById('profile')
console.log(profile)
profile.src = `${userData.imageUrl}`


function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productContainer = document.getElementById('productContainer');
    let total = 0;
    productContainer.innerHTML += cart.map((item, index) => {
        total += item.productPrice
        return `
        <div class="productCard">

            <img src="${item.productImage}" alt="">
            <h3>${item.productName}</h3>
            <p>₹ ${item.productPrice}</p>
            <button onclick="removeItem(${index})">Remove Item</button>
        </div>
        `
    }).join('')

    document.getElementById('total').innerText = `Total:₹ ${total}`


}

displayCartItems()


function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let product=cart.find((p)=>p.id===id);
    cart.splice(id,1);
    localStorage.setItem('cart',JSON.stringify(cart))
    window.location.reload()

}


function clearCart(){
    let res=confirm("Are you sure you want to remove all items?")
    if(res){
        localStorage.setItem('cart',JSON.stringify([]))
        window.location.href='./HomePage.html'
    }
}

function checkout(){
    alert("Thank You for shopping with us! Order Again")
    localStorage.setItem('cart',JSON.stringify([]))
        window.location.href='./HomePage.html'
}