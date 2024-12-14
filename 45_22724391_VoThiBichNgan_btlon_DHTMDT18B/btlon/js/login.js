$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var email = $('#email').val()
        var password = $('#password').val();

        // Kiểm tra email và mật khẩu có được nhập không
        if (email === '') {
            alert('Email is required');
            return;
        }

        if (password === '') {
            alert('Password is required');
            return;
        }

        // Kiểm tra định dạng email hợp lệ
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Invalid email format');
            return;
        }

        // Lấy thông tin người dùng từ localStorage
        var storedUser = localStorage.getItem('user');
        if (!storedUser) {
            alert('No user found. Please sign up first.');
            return;
        }

        var user = JSON.parse(storedUser);

        // Kiểm tra thông tin email và mật khẩu
        if (email === user.email && password === user.password) {
            alert('Login successful!');
            
            // Lưu thông tin vào sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify({ email: user.email }));
            
            // Chuyển hướng sau khi đăng nhập thành công
            window.location.href = 'index.html'; 
        } else {
            alert('Incorrect email or password');
        }
    });
});