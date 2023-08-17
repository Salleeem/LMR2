document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart-items');
    const productList = document.getElementById('product-list');
    const totalDisplay = document.getElementById('total');

    let cartItems = [];
    let total = 0;

    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const item = event.target.parentElement;
            const itemId = item.getAttribute('data-id');
            const itemName = item.getAttribute('data-name');
            const itemPrice = parseFloat(item.getAttribute('data-price'));

            const cartItem = {
                id: itemId,
                name: itemName,
                price: itemPrice,
            };

            cartItems.push(cartItem);
            total += itemPrice;

            updateCart();
        }
    });

    function updateCart() {
        cart.innerHTML = '';
        cartItems.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cart.appendChild(li);
        });

        totalDisplay.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
});
