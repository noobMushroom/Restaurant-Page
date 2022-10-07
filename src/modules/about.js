const sliderDiv=()=>{
    const slider= document.createElement('div');
    slider.classList.add("slider");
    slider.innerHTML="<h1><u>ANDURIAN RESTAURANTS</u></h1><br> we are an intergalactic restaurant brand. We are making delicious food for the last 5000 years. We have the best chefs in universe.We have restaurants all the across universe and menu for every planet and every species. With advance delivery options.<br> <i>Hope you enjoy your time with us.</i><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return slider
}

const about=()=>{
    const about= document.createElement("div");
    about.classList.add("about");
    about.appendChild(sliderDiv())

    return about;
}


export default about()