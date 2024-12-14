// Hàm kiểm tra người dùng đã đăng nhập chưa
function checkUserLoggedIn() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('Vui lòng đăng nhập để tiếp tục!');
        window.location.href = 'login.html'; // Điều hướng đến trang đăng nhập
    }
}

// Hàm render thông tin giỏ hàng và người dùng lên màn hình
function renderCheckoutInfo() {
    // Kiểm tra người dùng đăng nhập
    checkUserLoggedIn();
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    // Kiểm tra nếu giỏ hàng trống
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products before checking out.');
        window.location.href = 'cart.html'; // Điều hướng về trang giỏ hàng
        return;
    }

    // Render thông tin tổng giá trị giỏ hàng
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += parseFloat(item.newPrice.replace(/[^0-9.-]+/g, "")) * item.quantity;
    });
    
    document.querySelector('.subtotal').textContent = `${subtotal.toLocaleString('en-US')} VND`;
    document.querySelector('.total-price .item-value').textContent = `${subtotal.toLocaleString('en-US')} VND`;

    // Hiển thị email người dùng đã đăng nhập
    document.querySelector('#email').value = loggedInUser.email;
}

// Hàm xử lý khi người dùng nhấn nút "Place an Order"
function placeOrder() {
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;

    // Kiểm tra thông tin người dùng
    if (!name || !phone || !email || !address) {
        alert('Please fill in all required fields.');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderInfo = {
        customer: {
            name: name,
            phone: phone,
            email: email,
            address: address
        },
        products: cart,
        total: document.querySelector('.total-price .item-value').textContent
    };

    // Lưu thông tin đơn hàng vào LocalStorage
    localStorage.setItem('order', JSON.stringify(orderInfo));

    // Hiển thị thông báo thành công
    alert('Đặt hàng thành công <3');

    // Xóa giỏ hàng sau khi đặt hàng
    localStorage.removeItem('cart');

    // Điều hướng người dùng về trang chủ hoặc trang cảm ơn
    window.location.href = 'index.html';
}

// Gọi hàm render khi trang được tải
document.addEventListener('DOMContentLoaded', renderCheckoutInfo);

