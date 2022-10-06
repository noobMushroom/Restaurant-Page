class Dishes{
 constructor(name, description, price) {
   this.name=name
   this.description=description
   this.price=price
}}

const menuItems =()=>{
    const dishCard=document.createElement('div');
    dishCard.classList.add('dishCard')
    const dish1=new Dishes('Olktors gamma-supplement', 'A good supplement before going to travel hot planet it will increase your body resistance for heat', "400 gold coins");
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

    for (const i of dish){
        const card= document.createElement('div');
        card.classList.add('card')
        dishCard.appendChild(card)
        const name= document.createElement('div')
        name.classList.add("dishName");
        const description=document.createElement('div');
        description.classList.add("description");
        const price = document.createElement('div');
        price.classList.add('price');

        card.appendChild(name)
        card.appendChild(description)
        card.appendChild(price)
        card.appendChild(img)
        name.innerHTML=i.name;
        description.innerHTML=i.description;
        price.innerHTML=`${i.price}$`;
    }

    return dishCard
}

const menu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(menuItems())
    return menu

}

export default menu()