const navBar = document.querySelector('.wrapper-navi')
const sections = document.querySelectorAll('section')
const navInfo = document.querySelectorAll('.desktop li>a')
const toTop = document.querySelector('.toTop')
const footYear = document.querySelector('.footer__bottom-year')
const menuBtn = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile')
const closeBtn = document.querySelector('.fa-times')
const mobileMenuBtns = mobileMenu.querySelectorAll('a')


//Menu for mobile version
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

//Footer Date
footYear.textContent = new Date().getFullYear();

/// BTN TO TOP  && Navi bar height changer
window.addEventListener('scroll', () => {
    scrollY>20 ? navBar.classList.add('distance'):navBar.classList.remove('distance')
    scrollY>document.body.offsetHeight/2 ? toTop.style.opacity = 1 : toTop.style.opacity = 0;
})

//ACTUAL SECTION
window.addEventListener('scroll', () =>{
    if(window.scrollY<=sections[0].offsetTop-5){
       navInfo.forEach((el)=>{
        el.classList.remove('active')
       })
        navInfo[0].classList.add('active')
    }else if(window.scrollY<sections[1].offsetTop-20){
        navInfo.forEach((el)=>{
         el.classList.remove('active')
        })
         navInfo[1].classList.add('active')
    }else if(window.scrollY>=sections[1].offsetTop-20){
        navInfo.forEach((el)=>{
         el.classList.remove('active')
        })
         navInfo[2].classList.add('active')
    }
}
)




