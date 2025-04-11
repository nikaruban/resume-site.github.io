document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Функция добавления товара в корзину
    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    // Функция обновления корзины
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += parseFloat(item.price);
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
        });

        totalPrice.textContent = total.toFixed(2);
    }

    // Назначаем обработчик на кнопки "Add to Cart"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            addToCart(name, price);
        });
    });

    // Кнопка оформления заказа
    document.getElementById("checkout").addEventListener("click", function () {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
    });
});
