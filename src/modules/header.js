import { head } from "lodash";
import about from "./about";
import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";


function navbar(){
    const nav= document.createElement('nav');
    nav.classList.add("navBar")
    
    // home button
    const homeBtn=document.createElement("button");
    homeBtn.classList.add("navBtn");
    homeBtn.textContent='HOME'; 
    homeBtn.addEventListener('click', ()=> setPage(homepage))

    // about button
    const aboutBtn=document.createElement('button');
    aboutBtn.classList.add("navBtn");
    aboutBtn.textContent="ABOUT";
    aboutBtn.addEventListener('click', ()=> setPage(about))

    // menu button
    const menuBtn=document.createElement("button");
    menuBtn.classList.add("navBtn");
    menuBtn.textContent="MENU";
    menuBtn.addEventListener('click', ()=>setPage(menu))

    // contact button
    const contactBtn=document.createElement("button");
    contactBtn.classList.add('navBtn');
    contactBtn.textContent="CONTACT";
    contactBtn.addEventListener('click', ()=>setPage(contact))

    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav
}

const logo=()=>{
    const logo=document.createElement("h1")
    logo.classList.add("logo");
    logo.textContent="ANDURIAN RESTAURANTS";

    return logo 
}

const setPage=(element)=>{
    const mainDiv=document.querySelector(".container");
    mainDiv.innerHTML=''
    mainDiv.appendChild(element)
}


function header(){
    const head= document.createElement("header")
    head.classList.add("head")
    head.appendChild(logo())
    head.appendChild(navbar())

    return head
}

export default header()