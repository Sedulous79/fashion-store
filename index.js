const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
// const body= document.getElementById('bd');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
 
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

// if(body){
//     body.addEventListener('click',()=>{
//         nav.classList.remove('active')
//     })
// }

var Mainimg=document.getElementById('Mainimg');
var smallimg=document.getElementsByClassName('smallimg');

smallimg[0].onclick= ()=>{
    Mainimg.src = smallimg[0].src;
}
smallimg[1].onclick= ()=>{
    Mainimg.src = smallimg[1].src;
}

smallimg[2].onclick= ()=>{
    Mainimg.src = smallimg[2].src;
}

smallimg[3].onclick= ()=>{
    Mainimg.src = smallimg[3].src;
}























