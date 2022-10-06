import { divide } from "lodash"

const introduction=()=>{
    const introPara= document.createElement("div");
    introPara.classList.add("introPara");
    const para= document.createElement("p");
    para.classList.add("para");
    para.innerHTML='Welcome to <b>ANDURIAN RESTAURANTS</b> we are an intergalactic restaurant brand. We are making delicious food for the last 5000 years. We have the best chefs in universe.We have restaurants all the across universe and menu for every planet and every species. With advance delivery options.<br> <i>Hope you enjoy your time with us.</i>';
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