const blogPosts = [
    {
      id: 1,
      title: "Chó có ăn được thức ăn mèo không?",
      description: "Mặc dù chó có thể ăn thức ăn mèo một cách thỉnh thoảng mà không gặp vấn đề ngay lập tức, nhưng không nên cho chúng ăn thường xuyên. Điều tốt nhất là cung cấp thức ăn phù hợp với nhu cầu dinh dưỡng của chó....",
      imgSrc: "img/image_1.jpg",
    },
    {
      id: 2,
      title: "Những tiêu chí quan trọng cần biết khi chọn thức ăn chó mèo",
      description: "Thói quen chăm sóc thú cưng ngày càng có nhiều sự thay đổi. Đi cùng với đó là những kiến thức khoa học được áp dụng triệt để nhằm mang lại cho cún sức khỏe và sự phát triển ổn định. Vì vậy, khi nhắc tới thức ăn chó mèo, người nuôi thú cưng luôn mong muốn tìm được những tiêu chí để chọn lựa sản phẩm này tốt nhất.",
      imgSrc: "img/image_2.jpg",
    },
    {
      id: 3,
      title: "Phân bổ bữa ăn dinh dưỡng hợp lý cho thú cưng của bạn",
      description: "Thường xuyên cập nhật tình trạng sức khỏe của thú cưng để phân chia bữa ăn hợp lý, phù hợp với nhu cầu dinh dưỡng của mỗi loài...",
      imgSrc: "img/image_3.jpg",
    },
    {
      id: 4,
      title: "Thú cưng khó ăn, cách giải quyết là gì?",
      description: "Điều cần thiết là từ mỗi tháng cần khám sức khỏe định kỳ nếu thấy dấu hiệu bất thường từ chúng như mệt mỏi, nằm dài, lười ăn nguy cơ là dấu hiệu thú của bạn có thể bị mắc bệnh...",
      imgSrc: "img/image_4.jpg",
    },
    
  ];
  
  function renderBlogPosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    const container = document.querySelector('.main-blog-container');
    blogPosts.forEach((post) => {
      const blogItem = `
        <div class="blog-item">
          <div class="item-img">
            <img src="${post.imgSrc}" alt="">
          </div>
          <div class="item-content">
            <span class="item-title">${post.title}</span>
            <p class="item-description">${post.description}</p>
            <a class="btn-detail" href="blog-detail.html?id=${post.id}" class="">Đọc thêm</a>
          </div>
        </div>
      `;
      container.innerHTML += blogItem;
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    renderBlogPosts();
  });
  