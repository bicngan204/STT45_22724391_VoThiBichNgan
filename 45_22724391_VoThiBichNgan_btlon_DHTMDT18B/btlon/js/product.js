
// Hàm render danh sách sản phẩm từ LocalStorage ra giao diện HTML
function renderProducts() {
    // Lấy danh sách sản phẩm từ LocalStorage
    const productList = JSON.parse(localStorage.getItem('productList'));
    
    // Kiểm tra nếu có sản phẩm trong LocalStorage
    if (productList && productList.length > 0) {
        const productContainer = document.querySelector('.featured-items-2');
        productList.forEach(product => {
            // Tạo HTML cho từng sản phẩm
            const productHTML = `
                <div class="featured-item">
                     <a href="product-detail.html?id=${product.id}" class="img-prod">
                        <img src="${product.img}" alt="${product.name}" class="featured-img">
                        <span class="label">${product.discount}</span>
                        <div class="item-content">
                            <h3 class="prod-name">${product.name}</h3>
                            <div class="pricing">
                                <p class="price">
                                    <del class="price-dc price-eff">${product.oldPrice}</del>
                                    <span class="price-sale">${product.newPrice}</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            // Thêm HTML của sản phẩm vào container
            productContainer.innerHTML += productHTML;
        });
    } else {
        console.log('No products found in LocalStorage.');
    }
  }
  
  // Gọi hàm render khi trang được tải
  document.addEventListener('DOMContentLoaded', renderProducts);