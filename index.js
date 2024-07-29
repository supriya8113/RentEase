document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector('#navbar a[href="cart.html"]');
    
    // Update the cart icon with the number of items in the cart
    function updateCartIcon() {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> (${cartItems.length})`;
    }

    // Call the function initially to set the initial state
    updateCartIcon();
});
