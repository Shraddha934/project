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