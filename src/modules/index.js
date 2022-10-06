import _ from 'lodash';
import header from './header';
import '../style/style.css'
import homepage from './homepage';
import footer from './footer';


const defaultPage = () => {
    const main = document.getElementById("content")
    main.appendChild(header)
    const container = document.createElement('div')
    container.classList.add("container");
    container.setAttribute('id', 'container')
    main.appendChild(container)
    container.appendChild(homepage)
    main.appendChild(footer)
}

defaultPage()


