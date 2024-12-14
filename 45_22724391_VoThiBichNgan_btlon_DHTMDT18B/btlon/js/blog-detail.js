// Hàm lấy ID từ URL
function getPostIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
  }
  
  // Lấy dữ liệu từ localStorage
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
  
  // Hàm render chi tiết bài viết lên trang
  function renderBlogDetail() {
    const postId = getPostIdFromUrl();
    const post = blogPosts.find(post => post.id === postId);
  
    if (post) {
      // Đổi tiêu đề trang
      document.title = post.title;
  
      // Đổi tiêu đề breadcrumb
      document.querySelector(".main-title").textContent = post.title;
      document.querySelector(".breadcrumbs").innerHTML = `<a href="/" class="link">Trang chủ</a> - ${post.title}`;
  
      // Hiển thị hình ảnh và nội dung bài viết
      document.querySelector(".blog-featured-img img").src = post.imgSrc;
      document.querySelector(".blog-content").textContent = post.description;
    } else {
      document.querySelector(".main-blog-container").innerHTML = "<p>Bài viết không tồn tại</p>";
    }
  }
  
  // Gọi hàm để render dữ liệu khi trang đã sẵn sàng
  document.addEventListener("DOMContentLoaded", function() {
    renderBlogDetail();
  });
  