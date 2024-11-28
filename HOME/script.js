//==========LINKING FOR PAGINATION AND SWIPER IN SWIPERJS SCRIPT=====
new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween:10,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1
        },
        601:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView:4
        },
        1440:{
            slidesPerView:5
        },
        2560:{
            slidesPerView:6
        },
    
    }
  });

/*===========SHOW MENU========*/
const navMenu= document.getElementById("nav-menu");
const navToggle= document.getElementById("nav__toggle");
const navClose= document.getElementById("nav__close");

/*======================MENU SHOW===========*/
if(navToggle){
    navToggle.addEventListener("click", ()=> {
        navMenu.classList.add("show-menu");
    })
}

/*===============MENU HIDDEN ===========*/
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}
/*===============REMOVE MENU MOBILE=========*/
const navLink = document.querySelectorAll('.nav-list');
const linkAction=()=>{
    navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))

 //CONTACT SUBMISSION FORM
 const textBox = document.getElementById("name");
 const myPara = document.getElementById("myPara");
 const submit = document.getElementById("submit");
 const email = document.getElementById("email");
 const message = document.getElementById("message");

 submit.onclick=function(){
    myPara.textContent= `Thank you for your feedback  ${textBox.value}, We will get back with you shortly.`;
    textBox.value='';
    email.value='';
    message.value='';
 }

