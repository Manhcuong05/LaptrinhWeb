
const form = document.querySelector('.box_form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const zipInput = document.getElementById('zip');

function validateInputs() {
    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Vui lòng nhập email hợp lệ.");
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số).");
        isValid = false;
    }

    if (addressInput.value.trim() === '') {
        alert("Vui lòng nhập địa chỉ.");
        isValid = false;
    }
    if (cityInput.value.trim() === '') {
        alert("Vui lòng nhập thành phố.");
        isValid = false;
    }
    if (zipInput.value.trim() === '') {
        alert("Vui lòng nhập mã ZIP.");
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateInputs()) {
        alert('Thông tin đã được gửi thành công!');
    }
});