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
    container.appendChild(header)
    container.appendChild(homepage)
    container.appendChild(footer)

    return main
}

export default defaultPage

defaultPage()


