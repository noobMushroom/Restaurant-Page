const footer =()=>{
    const foot= document.createElement("footer");
    foot.classList.add('foot');
    const footInfo=document.createElement('div');
    footInfo.classList.add('footInfo');
    footInfo.innerHTML='&copy created by MUSHROOM'

    foot.appendChild(footInfo)

    return foot
}


export default footer()