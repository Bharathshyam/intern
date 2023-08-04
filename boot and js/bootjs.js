const btncart=document.querySelector('#cart-outline');
const cart=document.querySelector('.cart');
const btncancel=document.querySelector('#cancel-btn');


btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btncancel.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});