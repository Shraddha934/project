//html
<!DOCTYPE html>
<html>
<head>
    <title>Product Page</title>
    <link rel="stylesheet" href="prod_page.css">
    <script src="https://kit.fontawesome.com/92d70a2fd8.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <p class="logo">Logo</p>
        <div class="cart"><i class="fa fa-shopping-cart"></i><p id="count">0</p></div>
    </div>
    <div class="container">
        <div id="root"></div>
        <div class="sidebar">
            <div class="head"><p>My Cart</p></div>
            <div id="cartItem">Your cart is empty</div>
            <div class="foot">
                <h>Total</h>
                <h2 id="total">$ 0.00</h2>
            </div>
            <button class="buy-now">Buy Now</button>
        </div>
    </div>
    <script src="prod_page.js"></script>
</body>
</html>

//css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    font-size: 18px;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.header {
    height: 80px;
    width: 70%;
    background-color: goldenrod;
    border-radius: 3px;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}

.header .logo {
    font-size: 30px;
    font-weight: bold;
    color: white;
}

.cart {
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    border-radius: 3px;
    width: 80px;
}

.fa {
    color: goldenrod;
}

.cart p {
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background-color: goldenrod;
    color: white;
}

.container {
    display: flex;
    width: 70%;
    margin-bottom: 30px;
}

#root {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.sidebar {
    width: 40%;
    border-radius: 5px;
    background-color: #eee;
    margin-left: 20px;
    padding: 15px;
    text-align: center;
}

.head {
    background-color: goldenrod;
    border-radius: 3px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    display: flex;
    align-items: center;
}

.foot {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 10px 0;
    border-top: 1px solid #333;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid goldenrod;
    border-radius: 5px;
    padding: 15px;
}

.img-box {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.images {
    max-width: 90%;
    max-height: 90%;
    object-fit: cover;
    object-position: center;
}

.bottom {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 110px;
}

h2 {
    font-size: 20px;
    color: red;
}

button {
    width: 100%;
    position: relative;
    border: none;
    border-radius: 5px;
    background-color: goldenrod;
    padding: 7px 25px;
    cursor: pointer;
    color: white;
}

button:hover {
    background-color: #333;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid #aaa;
    border-radius: 3px;
    margin: 10px 10px;
}

.row-img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid goldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rowimg {
    max-width: 43px;
    max-height: 43px;
    border-radius: 50%;
}

.fa-trash:hover {
    color: red;
    cursor: pointer;
}

button {
    width: 100%;
    position: relative;
    border: none;
    border-radius: 5px;
    background-color: goldenrod;
    padding: 7px 25px;
    cursor: pointer;
    color: white;
    margin: 5px 0;
}

button:hover {
    background-color: #333;
}

.buy-now {
    background-color: rgb(116, 106, 25);
}

.buy-now:hover {
    background-color: rgb(153, 126, 8);
}


//javascript
const product = [
    {
        id: 0,
        image: 'halad.jpg',
        title: 'Halad',
        price: 120,
    },
    {
        id: 1,
        image: 'cotton.JPG',
        title: 'Cotton',
        price: 100,
    },
    {
        id: 2,
        image: 'topi.JPG',
        title: 'Topi',
        price: 200,
    },
    {
        id: 3,
        image: 'Anterpath.jpeg',
        title: 'Antarpat',
        price: 1000,
    },
    {
        id: 4,
        image: 'rukhwat.jpeg',
        title: 'Rukhwat',
        price: 50000,
    },
    {
        id: 5,
        image: 'supari.jpeg',
        title: 'Supari',
        price: 500,
    },
    {
        id: 6,
        image: 'mundavlya.jpeg',
        title: 'Mundavlya',
        price: 2000,
    },
    {
        id: 7,
        image: 'kalsh.jpeg',
        title: 'Kalsh',
        price: 1000,
    },
 
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

let cart = [];

function addtocart(id) {
    const item = product.find((item) => item.id === id);
    cart.push(item);
    displaycart();
}

function buyNow(id) {
    const item = product.find((item) => item.id === id);
    alert(`You have bought ${item.title} for $${item.price}.00`);
    // Additional code to handle the buy now process can be added here
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerText = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total += price;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>${price}.00</h2>
                    <i class='fa fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
        document.getElementById("total").innerHTML = "$ " + total + ".00";
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}
