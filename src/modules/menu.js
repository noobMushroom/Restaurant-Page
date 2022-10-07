import header from './header';
import footer from './footer';


class Dishes{
 constructor(name, description, price, img) {
   this.name=name
   this.description=description
   this.price=price
   this.img=img
}}

const menuItems =()=>{
    const dishCard=document.createElement('div');
    dishCard.classList.add('dishCard')
    const dish1=new Dishes('Olktors gamma-supplement', 'A good supplement before going to travel hot planet it will increase your body resistance for heat', "400 gold coins","/src/images/7877022.jpg");
    const dish2=new Dishes('something2', 'something nice', 89);
    const dish3=new Dishes('something3', 'something nice', 89);
    const dish4=new Dishes('something4', 'something nice', 89);
    const dish5=new Dishes('something5', 'something nice', 89);
    const dish6=new Dishes('something6', 'something nice', 89);
    const dish7=new Dishes('something7', 'something nice', 89);
    const dish8=new Dishes('something8', 'something nice', 89);
    const dish9=new Dishes('something9', 'something nice', 89);
    const dish10=new Dishes('something10', 'something nice', 89);
    const dish=[]
    dish.push(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8,dish9, dish10)


    dish.forEach(dish=>{     
        const card= document.createElement('div');
        card.classList.add('card')
        dishCard.appendChild(card)
        const name= document.createElement('div')
        name.classList.add("dishName");
        const description=document.createElement('div');
        description.classList.add("description");
        const price = document.createElement('div');
        price.classList.add('price');

        //div for info

        const infoDiv=document.createElement('div');
        infoDiv.classList.add('infoDiv');
        card.appendChild(infoDiv)

        // creating div for images

        const imgDiv= document.createElement('div');
        imgDiv.classList.add('imgDiv');
        card.appendChild(imgDiv);
        imgDiv.innerHTML=`<img src="..${dish.img}">`

        infoDiv.appendChild(name)
        infoDiv.appendChild(description)
        infoDiv.appendChild(price)
        // card.appendChild(img)
        name.innerHTML=dish.name;
        description.innerHTML=dish.description;
        price.innerHTML=`${dish.price}$`;
    })

    return dishCard
}

const menu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(menuItems())
    return menu

}

const menuLoad=()=>{
    const mainDiv=document.getElementById("content")
    mainDiv.innerHTML=""
    mainDiv.appendChild(header)
    mainDiv.appendChild(menu())

    return mainDiv
}

export default menu()