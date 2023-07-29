// Product data containing an array of objects representing products
const product = [
    {
        id: 0,
        image: 'img/p1.jpg',
        title: 'Toy Man',
        price: 46,
    },
    {
        id: 1,
        image: 'img/p2.jpg',
        title: 'Hell Art Paint',
        price: 100,
    },
    {
        id: 2,
        image: 'img/p3.jpg',
        title: 'Blue Vase',
        price: 149,
    },
    {
        id: 3,
        image: 'img/p4.jpg',
        title: 'Darth Vader NFT',
        price: 100000,
    }
];

// Extract unique categories from the product data
const categories = [...new Set(product.map((item) => { return item }))];

// Initialize an index variable
let i = 0;

// Render the product categories to the 'root' element
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        // Add 'Add to cart' button and associate it with the addtocart function
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

// Initialize the cart as an empty array
var cart = [];

// Function to add a product to the cart
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

// Function to remove an element from the cart
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

// Function to display the cart content
function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        // Display a message when the cart is empty
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        // Display the cart items and calculate the total price
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                // Add a trash icon for removing items from the cart
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

// Function to handle the checkout button
function CheckoutBtn() {
    window.location.href = "checkoutpage.html";
}
