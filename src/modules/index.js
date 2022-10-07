import _ from 'lodash';
import header from './header';
import '../style/style.css'
import homepage from './homepage';
import footer from './footer';


const defaultPage = () => {
    const main = document.getElementById("content")
    const container = document.createElement('div')
    container.classList.add("container");
    container.setAttribute('id', 'container')
    main.appendChild(container)
    const homeDiv=document.createElement('div')
    homeDiv.classList.add('home')
    container.appendChild(homeDiv)
    homeDiv.appendChild(header)
    homeDiv.appendChild(homepage)
    homeDiv.appendChild(footer)
}

defaultPage()


