function increaseValue() {
  var quantity = document.getElementById('quantity');
  var currentValue = parseInt(quantity.value, 10);
  if (currentValue < 100) {  // Giới hạn tối đa là 100
    quantity.value = currentValue + 1;
  }
}

function decreaseValue() {
  var quantity = document.getElementById('quantity');
  var currentValue = parseInt(quantity.value, 10);
  if (currentValue > 1) {  // Giới hạn tối thiểu là 1
    quantity.value = currentValue - 1;
  }
}
// Hàm lấy tham số từ URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Hàm render chi tiết sản phẩm
function renderProductDetail() {
  const productId = getProductIdFromUrl();
  const productList = JSON.parse(localStorage.getItem('productList'));

  // Tìm sản phẩm theo ID
  const product = productList.find(item => item.id == productId);

  if (product) {
    // Render dữ liệu sản phẩm ra HTML
    document.querySelector('.item-img').src = product.img;
    document.querySelector('.item-title').textContent = product.name;
    document.querySelector('.item-price').textContent = product.newPrice + ' VND';
    document.querySelector('.item-description').textContent = "This is a detailed description of " + product.name;
  } else {
    console.log('Product not found');
  }
}

// Gọi hàm render khi trang được tải
document.addEventListener('DOMContentLoaded', renderProductDetail);

// Hàm lấy tham số từ URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Hàm lấy thông tin sản phẩm hiện tại từ LocalStorage
function getProductById(productId) {
  const productList = JSON.parse(localStorage.getItem('productList'));
  return productList.find(item => item.id == productId);
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart() {
  const productId = getProductIdFromUrl();
  const product = getProductById(productId);

  if (!product) {
      console.log('không tìm thấy sản phẩm');
      return;
  }

  // Lấy số lượng sản phẩm từ input (giả sử có input quantity)
  const quantity = parseInt(document.getElementById('quantity').value);

  // Lấy giỏ hàng từ LocalStorage, nếu chưa có thì tạo mảng trống
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const productInCart = cart.find(item => item.id == product.id);
  if (productInCart) {
      // Nếu đã có, tăng số lượng
      productInCart.quantity += quantity;
  } else {
      // Nếu chưa có, thêm sản phẩm vào giỏ hàng
      cart.push({
          ...product,
          quantity: quantity
      });
  }

  // Lưu giỏ hàng trở lại LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Thông báo sản phẩm đã được thêm vào giỏ hàng
  alert('Sản phẩm đã được thêm vào giỏ hàng!');
}
