const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const closeBtn = document.querySelector('.closeBtn'); // Thêm dòng này

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Thêm hàm mở cửa sổ
loginBtn.onclick = function(){
    container.style.display = "block";
}

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        // Ẩn modal cửa sổ đăng nhập khi nhấp ra ngoài nó
        container.style.display = 'none';
    }
});