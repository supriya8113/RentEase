document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById('cart-items');

    // Function to render cart items
    function renderCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = ''; // Clear previous content

            cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="cart-item">
                        <img src="calci.jpg" alt="${item.name}">
                        <div class="item-details">
                            <h5>${item.name}</h5>
                            <span>Details about the item</span>
                            <h4>${item.price}</h4>
                        </div>
                        <button class="remove-item" onclick="removeItem('${item.name}')">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(listItem);
            });
        }
    }

    // Call the function initially to render the cart items
    renderCartItems();
});

// Function to remove item from the cart
function removeItem(itemName) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
}
