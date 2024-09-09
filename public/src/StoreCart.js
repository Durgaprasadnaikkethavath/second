function loadCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart Empty</p>";
    return;
  }

  cart.forEach((item) => {
    let j = 0;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.innerHTML =
      `
        <div class="addItems">
          <div>
            <img src=${item.image}></img>
            </div>
            <div class="cart_button">
              <p>${item.title}</p>
              <h1>$ ${item.price}.00</h1>` +
      "<button onclick='deleteItem(" +
      j++ +
      ")'>Delete</button>" +
      `</div>
        </div>
        `;
    cartItemsContainer.appendChild(cartItemDiv);
  });
}

document.getElementById("clear-cart").onclick = function () {
  localStorage.removeItem("cart");
  window.location.reload(); // Refresh to update the cart display
};

document.addEventListener("DOMContentLoaded", loadCart);
