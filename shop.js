document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.pro .cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.pro');
        const productName = product.querySelector('.des h5').innerText;
        const productPrice = product.querySelector('.des h4').innerText;

        // Retrieve existing cart items from localStorage or create an empty array
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cartItems.push({
            name: productName,
            price: productPrice
        });

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
});
