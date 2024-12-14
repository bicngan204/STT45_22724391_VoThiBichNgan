$(document).ready(function () {
    $('#signupForm').on('submit', function (e) {
        e.preventDefault();

        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        var confirmPassword = $('#confirmPassword').val().trim();

        // Kiểm tra email có hợp lệ không
        if (email === '') {
            alert('Email is required');
            return;
        }

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Vui lòng nhập đúng định dạng email!');
            return;
        }

        // Kiểm tra mật khẩu có được nhập không
        if (password === '') {
            alert('Vui lòng nhập mật khẩu!');
            return;
        }

        // Kiểm tra độ dài mật khẩu (ít nhất 6 ký tự)
        if (password.length < 6) {
            alert('Mật khẩu bắt buộc ít nhất 6 ký tự!');
            return;
        }

        // Kiểm tra mật khẩu khớp
        if (password !== confirmPassword) {
            alert('Mật khẩu không trùng khớp!');
            return;
        }

        // Lưu thông tin vào localStorage
        var user = {
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Đăng ký thành công!!!!');

        // Sau khi đăng ký thành công có thể chuyển hướng người dùng đến trang đăng nhập
        window.location.href = 'login.html';
    });
});