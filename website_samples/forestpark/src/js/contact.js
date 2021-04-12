const navBar = document.querySelector('.wrapper-navi')
const footYear = document.querySelector('.footer__bottom-year')
const menuBtn = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile')
const closeBtn = document.querySelector('.fa-times')
const mobileMenuBtns = mobileMenu.querySelectorAll('a')
const contactForm = document.querySelector('.contact')

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
})

window.addEventListener('scroll', () => {
    scrollY>20 ? navBar.classList.add('distance'):navBar.classList.remove('distance')
})

menuBtn.addEventListener('click', () =>{
    mobileMenu.classList.toggle('active');
    mobileMenuBtns.forEach(el =>{
        el.addEventListener('click', () =>{
            mobileMenu.classList.remove('active');
        })
    })
})

closeBtn.addEventListener('click', () =>{
    mobileMenu.classList.remove('active');
})


footYear.textContent = new Date().getFullYear();