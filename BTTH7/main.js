
const menuBtn = document.querySelector('.menu-btn-left');
const menuList = document.querySelector('.menu-list-left');

menuBtn.addEventListener('click', () => {
     menuList.classList.toggle('show');  
});

window.addEventListener('click', (e) => { 
    if(!menuBtn.contains(e.target) && !menuList.contains(e.target)) { 
        menuList.classList.remove('show');
    }
});


const menuBtn1 = document.querySelector('.menu-btn-right');
const menuList1 = document.querySelector('.menu-list-right');

menuBtn1.addEventListener('click', () => {
     menuList1.classList.toggle('show');  // Toggle hiển thị menu
});


window.addEventListener('click', (e) => { 
    if(!menuBtn1.contains(e.target) && !menuList1.contains(e.target)) { 
        menuList1.classList.remove('show');
    }
});
