document.querySelector(".r-btn").addEventListener("click",function (event) {
    document.querySelector(".product-slide").scrollLeft +=1100;
    event.preventDefault();       
});
document.querySelector(".l-btn").addEventListener("click",function (event) {
    document.querySelector(".product-slide").scrollLeft -=1100;
    event.preventDefault();       
});
document.querySelector(".btn-1a").addEventListener("click",function (event) {
    document.querySelector(".product-slide-1").scrollLeft +=1100;
    event.preventDefault();       
});
document.querySelector(".btn-1b").addEventListener("click",function (event) {
    document.querySelector(".product-slide-1").scrollLeft -=1100;
    event.preventDefault();       
});
document.querySelector(".btn-2a").addEventListener("click",function (event) {
    document.querySelector(".product-slide-2").scrollLeft +=1100;
    event.preventDefault();       
});
document.querySelector(".btn-2b").addEventListener("click",function (event) {
    document.querySelector(".product-slide-2").scrollLeft -=1100;
    event.preventDefault();       
});
document.querySelector(".btn-3a").addEventListener("click",function (event) {
    document.querySelector(".product-slide-3").scrollLeft +=1100;
    event.preventDefault();       
});
document.querySelector(".btn-3b").addEventListener("click",function (event) {
    document.querySelector(".product-slide-3").scrollLeft -=1100;
    event.preventDefault();       
});
document.querySelector(".backtop").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})
const sidebar=document.querySelector(".sidebar");
const cross  =document.querySelector(".fa-xmark");
const black  =document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    tri.classList.toggle("active");
    signin.classList.toggle("active");
    black.classList.toggle("active-1");
    document.body.classList.toggle("stop-scroll");
})