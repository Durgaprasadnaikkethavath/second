const products = [
  {
    id: 0,
    title: "CK One Body Wash by Calvin Klein",
    image: "/image/bd_1.png",
    price: 120,
  },
  {
    id: 1,
    title: "Lux Body Wash Bottle",
    image: "/image/bd_2.png",
    price: 250,
  },
  {
    id: 2,
    title: "Red Perfume Body Wash Bottle",
    image: "/image/bd_3.png",
    price: 415,
  },
];

function loadProducts() {
  const productContainer = document.getElementById("products");

  products.forEach((product) => {
    let i = 0;
    let k = 0;

    const productDiv = document.createElement("div");
    productDiv.innerHTML =
      `
  <div class="box_container">
    <div class="box">
      <img src=${product.image} class="box_image"></img>
    </div>
    <div class="button">
    <p>${product.title}</p>
    <h1>$ ${product.price}.00</h1>` +
      "<button  onclick='addToCart(" +
      i++ +
      ")'>AddToBag</button>" +
      "<button onclick='wishlist(" +
      k++ +
      ")'>WishList</button>" +
      `</div>
  </div>
  `;
    productContainer.appendChild(productDiv);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.title} has been added to your cart`);
}

function wishlist(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.title} has been added to your cart`);
}
document.addEventListener("DOMContentLoaded", loadProducts);
