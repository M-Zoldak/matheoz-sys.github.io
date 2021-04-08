//NAVBAR I BAR SHOWING HOW FAR AT SITE
const menuBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav-top');
const links = navBar.querySelectorAll('a');
const rangeBar = document.querySelector('.range');
const mobileNavBgActive = document.querySelector('.mobileNavBG')

// HTML / CSS / JS LOGOS Animation for mobile
const cards = document.querySelectorAll('.technologies__card');

// Offer
const offerBox = document.querySelectorAll('.realization__box');

// PROJECTS
const projects = document.querySelectorAll('.projects__list-item')

// CONTACT
const contact = document.querySelectorAll('.contact__field');




/// CODE



//Bar shows how far is site from top - Class range in components
const distFromTop = () =>{
    let y = (document.body.scrollHeight-window.innerHeight)/100;
    rangeBar.style.width =  scrollY/y + '%';
}
window.addEventListener('scroll', distFromTop);

//BUTTON ON/OFF
links.forEach((el) =>{
    el.addEventListener('click', ()=>{
        navBar.classList.remove('active');
        menuBtn.classList.remove('active');
        mobileNavBgActive.classList.remove('active');
        document.body.classList.remove('active');
        mobileNavBgActive.classList.add('unactive');
    })
    menuBtn.addEventListener('click', () =>{
        navBar.classList.add('active');
        menuBtn.classList.add('active');
        mobileNavBgActive.classList.add('active');
        document.body.classList.add('active');
        mobileNavBgActive.classList.remove('unactive');
    })
})
window.addEventListener('click', e=>{
    if(e.target == document.querySelector('.nav-top.active')){    
        navBar.classList.remove('active');        
        menuBtn.classList.remove('active');
        mobileNavBgActive.classList.remove('active');
        document.body.classList.remove('active');
        mobileNavBgActive.classList.add('unactive');
    }
})

// HTML CSS JS CARDS

window.addEventListener('scroll', () =>{
    cards.forEach((el)=>{
        scrollY>el.offsetTop-(window.innerHeight/2) ? el.classList.add('active'):el.classList.remove('active');
    })
})

// Realisation Boxes
window.addEventListener('scroll', () =>{
    offerBox.forEach((el)=>{
        scrollY>el.offsetTop-(window.innerHeight/1.5) ? el.classList.add('active'):el.classList.remove('active');
    })
})
// Projects
projects.forEach(el=>{
    el.firstElementChild.addEventListener('click', ()=>{
        if(el.classList.contains('projects__list-item--opened')){
            el.classList.remove('projects__list-item--opened');
            el.style.height = el.firstElementChild.offsetHeight + "px";
        }else{
            projects.forEach(el=>{
                el.classList.remove('projects__list-item--opened');
                el.style.height = el.firstElementChild.offsetHeight + "px";
            });
            let hei = el.firstElementChild.offsetHeight + el.lastElementChild.offsetHeight;
            el.style.height = `${hei}px`;
            el.classList.toggle('projects__list-item--opened');
    }})
})
//Contact form
let t= 300;
window.addEventListener('scroll', ()=>{
    if(scrollY>contact[0].closest('.contact').offsetTop-700 && !contact[0].classList.contains('active')){
        contact.forEach(el =>{
            setTimeout(() => {
                el.classList.add('active');
            }, t);
            t+=300;
        });
    }else if(scrollY<contact[0].closest('.contact').offsetTop-1000){
        contact.forEach(el =>{
        el.classList.remove('active');
        t=300;
    })}
})

// FOOTER - TIME
const date = document.querySelector('.footer-date').textContent = new Date().getFullYear();