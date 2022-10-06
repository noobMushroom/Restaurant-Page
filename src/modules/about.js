const sliderDiv=()=>{
    const slider= document.createElement('div');
    slider.classList.add("slider");
    slider.innerHTML="<h1><u>ANDURIAN RESTAURANTS</u></h1><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure error molestiae alias sint. Quo harum quod autem qui nostrum repellat perferendis aperiam ex perspiciatis esse, molestiae architecto. Architecto id, sequi ipsam fugiat praesentium beatae veritatis tempora placeat dicta laboriosam a qui quidem eveniet ipsum deserunt rem soluta vitae nemo asperiores minus. Impedit molestiae, ut fuga inventore consequatur saepe quo numquam optio maxime similique dolorum id excepturi vero. Accusantium molestiae consequatur quos atque earum voluptas, laborum repellat nulla necessitatibus nihil officia possimus inventore quis beatae architecto reiciendis blanditiis qui sunt? Est exercitationem perferendis fugit assumenda natus ut nihil aperiam voluptatem quas? Praesentium soluta quisquam nisi voluptates ad numquam qui. Nemo, similique quo ducimus fugiat est nihil temporibus odit accusamus repellat vel culpa in! Nesciunt cumque magni quaerat fugiat maxime provident nam "

    return slider
}

const about=()=>{
    const about= document.createElement("div");
    about.classList.add("about");
    about.appendChild(sliderDiv())

    return about;
}


export default about()