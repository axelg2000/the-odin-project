import { loadAbout } from "./about";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

console.log('Hello World')
loadHome()

const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click',()=>{
    loadHome()
})
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click',()=>{
    loadMenu()
})

const aboutBtn = document.querySelector('#aboutBtn');
aboutBtn.addEventListener('click',()=>{
    loadAbout()
})