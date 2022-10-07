import { divide } from "lodash"

const introduction=()=>{
    const introPara= document.createElement("div");
    introPara.classList.add("introPara");

    const img=document.createElement('img');
    img.classList.add('logoImg');

    img.src="../src/images/logo4.jpg"
    introPara.appendChild(img)

    const para= document.createElement("p");
    para.classList.add("para");


    para.innerHTML='Welcome to <b>ANDURIAN RESTAURANTS</b>';
    introPara.appendChild(para);
    return introPara
}

function homepage(){
    const intro= document.createElement("div");
    intro.classList.add("intro")
    intro.appendChild(introduction()) 
    return intro
}

export default homepage()