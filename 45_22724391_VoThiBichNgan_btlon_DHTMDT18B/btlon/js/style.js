$(document).ready(function () {
    $('.testimonials').slick({
      arrow: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024, // Tablet size
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768, // Mobile size
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  // Hàm lưu danh sách sản phẩm vào LocalStorage nếu chưa có
  function saveProductsToLocalStorage() {
    // Kiểm tra xem danh sách sản phẩm đã tồn tại trong LocalStorage chưa
    if (!localStorage.getItem('productList')) {
        const productList = [
            {
                id: 1,
                name: "Ớt chương",
                img: "img/product-1.jpg",
                discount: "30%",
                oldPrice: "120,000₫",
                newPrice: "80,000₫"
            },
            {
                id: 2,
                name: "Dâu tây",
                img: "img/product-2.jpg",
                discount: "25%",
                oldPrice: "100,000₫",
                newPrice: "75,000₫"
            },
            {
                id: 3,
                name: "Đậu Hà Lan",
                img: "img/product-3.jpg",
                discount: "20%",
                oldPrice: "90,000₫",
                newPrice: "72,000₫"
            },
            {
                id: 4,
                name: "Bắp Cải tím",
                img: "img/product-4.jpg",
                discount: "15%",
                oldPrice: "85,000₫",
                newPrice: "72,250₫"
            },
            {
                id: 5,
                name: "Cà chua",
                img: "img/product-5.jpg",
                discount: "35%",
                oldPrice: "110,000₫",
                newPrice: "71,500₫"
            },
            {
                id: 6,
                name: "Bông cải xanh",
                img: "img/product-6.jpg",
                discount: "10%",
                oldPrice: "50,000₫",
                newPrice: "45,000₫"
            },
            {
                id: 7,
                name: "Cà rốt",
                img: "img/product-7.jpg",
                discount: "40%",
                oldPrice: "130,000₫",
                newPrice: "78,000₫"
            },
            {
                id: 8,
                name: "Nước ép",
                img: "img/product-8.jpg",
                discount: "50%",
                oldPrice: "150,000₫",
                newPrice: "75,000₫"
            }
        ];
  
        // Lưu danh sách sản phẩm vào LocalStorage
        localStorage.setItem('productList', JSON.stringify(productList));
        console.log('Products saved to LocalStorage.');
    } else {
        console.log('Product list already exists in LocalStorage.');
    }
  }
  
  // Gọi hàm khi trang được tải
  document.addEventListener('DOMContentLoaded', saveProductsToLocalStorage);
  
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