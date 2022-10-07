import { head } from "lodash";
import about from "./about";
import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";


function navbar() {
    const nav = document.createElement('nav');
    nav.classList.add("navBar")

    // home button
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("navBtn");
    homeBtn.textContent = 'HOME';
    homeBtn.setAttribute("name", 'home')
    homeBtn.addEventListener('click', (e) => {
        const className = (e.target.name)
        setPage(homepage, className)

    })

    // about button
    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add("navBtn");
    aboutBtn.textContent = "ABOUT";
    aboutBtn.setAttribute("name", 'aboutDiv')
    aboutBtn.addEventListener('click', (e) => {
        const className = (e.target.name)
        setPage(about, className)
    })

    // menu button
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("navBtn");
    menuBtn.textContent = "MENU";
    menuBtn.setAttribute('name', 'menuDiv')
    menuBtn.addEventListener('click', (e) => {
        const className = (e.target.name)
        setPage(menu, className)
    })

    // contact button
    const contactBtn = document.createElement("button");
    contactBtn.classList.add('navBtn');
    contactBtn.textContent = "CONTACT";
    contactBtn.setAttribute('name','contactDiv')
    contactBtn.addEventListener('click', (e) => {
        const className = (e.target.name)
        setPage(contact, className)
    })

    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav
}

const logo = () => {
    const logo = document.createElement("h1")
    logo.classList.add("logo");
    logo.textContent = "ANDURIAN RESTAURANTS";

    return logo
}

const setPage = (element, className) => {
    const mainDiv = document.querySelector(".container");
    mainDiv.innerHTML = ''
    const tab = document.createElement("div");
    tab.classList.add(`${className}`)
    mainDiv.appendChild(tab)
    tab.appendChild(header())
    tab.appendChild(element)
    tab.appendChild(footer)
}


function header() {
    const head = document.createElement("header")
    head.classList.add("head")
    head.appendChild(logo())
    head.appendChild(navbar())

    return head
}

export default header()