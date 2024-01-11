const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

let isSideMenuOpen = true; // Initial state
menuBtn.addEventListener('click', () => {
    isSideMenuOpen = true;
    sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    isSideMenuOpen = false;
    sideMenu.style.display = "none";
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && !isSideMenuOpen) {
        isSideMenuOpen = true;
        sideMenu.style.display = "block";
    }
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})

// const col = themeToggler.querySelector('span:nth-child(2').classList.toggle('active');
// themeToggler.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme-variables')
//     themeToggler.querySelector('span:nth-child(1').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2').classList.toggle('active');

// })