// Hàm để giảm số lượng sản phẩm
function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Hàm để tăng số lượng sản phẩm
function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Hàm để xóa sản phẩm khỏi giỏ hàng
function removeProduct(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Xóa sản phẩm theo index
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Render lại giỏ hàng sau khi xóa
}


// Hàm để render giỏ hàng từ LocalStorage
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Xóa nội dung hiện tại trước khi render mới

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
        return;
    }

    cart.forEach((product, index) => {
        const productTotal = (parseFloat(product.newPrice.replace(/[^0-9.-]+/g,"")) * product.quantity).toLocaleString('en-US') + ' VND';

        const cartItemHTML = `
            <tr>
                <td><img src="${product.img}" alt="Product Image" width="100"></td>
                <td>${product.name}</td>
                <td>${product.newPrice}</td>
                <td>
                    <div class="quantity">
                        <button class="decrease" onclick="decreaseQuantity(${index})">-</button>
                        <input type="number" id="quantity${index}" value="${product.quantity}" readonly>
                        <button class="increase" onclick="increaseQuantity(${index})">+</button>
                    </div>
                </td>
                <td id="total${index}">${productTotal}</td>
                <td><button class="remove" onclick="removeProduct(${index})"><i class="fas fa-times"></i></button></td>
            </tr>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
}

// Gọi hàm render khi trang được tải
document.addEventListener('DOMContentLoaded', renderCart);
