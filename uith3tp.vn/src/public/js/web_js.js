// SLIDER SWITCH
// const straightLine = document.querySelectorAll('.advertising__dot-btn')
// const slide = document.querySelector('.advertising');
// const slideWidth = slide.offsetWidth;
// var distance=[0,slideWidth,slideWidth*2,slideWidth*3];
// var ImgIndex=0;
// document.querySelector('.advertising__next-btn').addEventListener('click',function(){
//     ImgIndex++;
//     if (4 == ImgIndex){
//         ImgIndex=0;
//     }
//     slide.style=`left:-${distance[ImgIndex]}px`;
//     straightLine.forEach((a)=>{
//         a.classList.remove('active');
//     })
//     straightLine[ImgIndex].classList.add('active');
// })
// document.querySelector('.advertising__prev-btn').addEventListener('click',function(){
//     ImgIndex--;
//     if (ImgIndex == -1){
//         ImgIndex=3;
//     }
//     slide.style=`left:-${distance[ImgIndex]}px`;
//     straightLine.forEach((a)=>{
//         a.classList.remove('active');
//     })
//     straightLine[ImgIndex].classList.add('active');
// })
// straightLine.forEach((a,index) => {
//     a.addEventListener('click',()=>{
//         slide.style=`left:-${distance[index]}px`;
//         straightLine.forEach((a)=>{
//             a.classList.remove('active');
//         })
//         a.classList.add('active');
//     });
// })
// CAROUSEL ADVERTISING
const slideAdvertising = document.querySelector('.advertising-swiching');
const slideWidthAdvertising = slideAdvertising.offsetWidth;
var distanceAdvertising = [0,slideWidthAdvertising];
var slideIndexAdvertising = 0;
document.querySelector('.advertising-swiching__next-btn').addEventListener('click',()=>{
    slideIndexAdvertising++;
    if(slideIndexAdvertising==2){
        slideIndexAdvertising=0;
    }
    slideAdvertising.style =`left:-${distanceAdvertising[slideIndexAdvertising]}px`;
})
document.querySelector('.advertising-swiching__prev-btn').addEventListener('click',()=>{
    slideIndexAdvertising--;
    if(slideIndexAdvertising==-1){
        slideIndexAdvertising=1
    }
    slideAdvertising.style =`left:-${distanceAdvertising[slideIndexAdvertising]}px`;
})
// CAROUSEL MALL BRAND
const slideMallBrand = document.querySelector('.mall-brand__carousel');
const slideWidthMallBrand = slideMallBrand.offsetWidth;
const straightLineMallBrand = document.querySelectorAll('.mall-brand__dot-btn');
var distanceMallBrand = [0,slideWidthMallBrand,slideWidthMallBrand*2,slideWidthMallBrand*3];
var slideIndexMallBrand = 0;
document.querySelector('.mall-brand__next-btn').addEventListener('click',()=>{
    slideIndexMallBrand++;
    if(slideIndexMallBrand==4){
        slideIndexMallBrand=0;
    }
    slideMallBrand.style =`left:-${distanceMallBrand[slideIndexMallBrand]}px`;
    straightLineMallBrand.forEach((a)=>{
        a.classList.remove('active');
    })
    straightLineMallBrand[slideIndexMallBrand].classList.add('active');
})
document.querySelector('.mall-brand__prev-btn').addEventListener('click',()=>{
    slideIndexMallBrand--;
    if(slideIndexMallBrand==-1){
        slideIndexMallBrand=3
    }
    slideMallBrand.style =`left:-${distanceMallBrand[slideIndexMallBrand]}px`;
    straightLineMallBrand.forEach((a)=>{
        a.classList.remove('active');
    })
    straightLineMallBrand[slideIndexMallBrand].classList.add('active');
})
straightLineMallBrand.forEach((a,index)=>{
    a.addEventListener('click',()=>{
        slideMallBrand.style=`left:-${distanceMallBrand[index]}px`;
        straightLineMallBrand.forEach((a)=>{
                a.classList.remove('active');
            })
            a.classList.add('active');
    })
})
// PICTURES SWITCH
var imgFeature = document.querySelector('.home-product__img-main')
var listImg = document.querySelectorAll('.home-product__list-img img')

listImg.forEach(imgElement=>{
    imgElement.addEventListener('click' , e=>{
        imgFeature.src = e.target.getAttribute('src')
    })
})

// LOGIN REGISTER FORM
const modalR = document.querySelector('.js-modalR')
const modalRegister = document.querySelector('.js-modal-register')
const modalContainerR = document.querySelector('.js-modalR-container')
function ShowRegisterForm(){
    modalR.classList.add('open');

}
function CloseRegisterForm(){
    modalR.classList.remove('open');
}

modalRegister.addEventListener('click', ShowRegisterForm)  
modalR.addEventListener('click',CloseRegisterForm)
modalContainerR.addEventListener('click',function(event){
    event.stopPropagation();
})
//LOGIN FORM
const modalL = document.querySelector('.js-modalL')
const modalLogin = document.querySelector('.js-modal-login')
const modalContainerL = document.querySelector('.js-modalL-container')
function ShowLoginForm(){
    modalL.classList.add('open')
}
function CloseLoginForm(){
    modalL.classList.remove('open')
}

modalLogin.addEventListener('click', ShowLoginForm)  
modalL.addEventListener('click',CloseLoginForm)
modalContainerL.addEventListener('click',function(event){
    event.stopPropagation()
})
//SWITCH FORM
const modalRSwitch = document.querySelector('.js-modalR-switch')
function SwitchRegisterForm(){
    CloseRegisterForm()
    ShowLoginForm()
}
modalRSwitch.addEventListener('click',SwitchRegisterForm)

const modalLSwitch = document.querySelector('.js-modalL-switch')
function SwitchLoginForm(){
    CloseLoginForm()
    ShowRegisterForm()
}
modalLSwitch.addEventListener('click',SwitchLoginForm)




////REGISTER LOGIN JAVASCRISPT
//REGISTER
document.querySelector('.js-register').addEventListener('click',register)
function register(){
    var email = document.getElementById('js-register-email').value;
    var password = document.getElementById('js-register-password').value;
    var repassword = document.getElementById('js-register-repassword').value;
    var user = {
        email : email,
        password : password
    }
    var jsonUser = JSON.stringify(user);
    localStorage.setItem(email,jsonUser);
}
//LOGIN
document.querySelector('.js-login').addEventListener('click',login)
function login(){
    var email = document.getElementById('js-login-email').value;
    var password = document.getElementById('js-login-password').value;
    var user= localStorage.getItem(email);
    var data=JSON.parse(user);
    if (data.email == email && data.password==password){
        alert('login successfully')
    }
}









