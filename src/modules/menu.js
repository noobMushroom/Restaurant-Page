import header from './header';
import footer from './footer';
import bgImage from '../images/menuBackground.jpg';

const background = () => {
  const background = document.createElement('div');
  background.classList.add('background');
  const backgroundImage = document.createElement('img');
  backgroundImage.classList.add('backgroundImage');
  backgroundImage.src = bgImage;
  background.appendChild(backgroundImage);
  return background;
};

class Dishes {
  constructor(name, description, price, img) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
  }
}

const menuItems = () => {
  const dishCard = document.createElement('div');
  dishCard.classList.add('dishCard');
  const dish1 = new Dishes(
    'Olktors gamma-supplement',
    'A good Breakfast before going to some hot planet it will increase your body resistance for heat',
    '400 gold coins',
    '/src/images/food1.jpg'
  );
  const dish2 = new Dishes(
    'pizza',
    'This smoked farro (emmer) roast is scarcely thin with a gooey texture. It tastes strongly of pumpkin seeds with carom (ajwain) and has a large amount of thyme. It smells like hand sanitizer with just the right amount of currants. It is uniquely cultural. You can really feel how high in probiotics and how high in riboflavin it is.',
    '800 gold coins',
    '/src/images/pizza.jpg'
  );
  const dish3 = new Dishes(
    'burger',
    'This fried red beans tapas is scarcely flaky with a hearty texture. It has subtle hints of teff with dill and has salvia. It smells like oranges with apricots. It is delicate and floral. You can really feel how BPA-free and how high in calcium it is.',
    '8900 gold coins',
    '/src/images/burger.jpg'
  );
  const dish4 = new Dishes(
    'Smoothies',
    'This breaded strawberries stew is moderately smooth with a juicy texture. It tastes strongly of tamarind with ginger and has a lot of poppy seeds. It smells like a meadow with a dash of broccoli raab. It is faintly undesirable. You can really feel how packed with phytonutrients and how alkaline it is.',
    '100 gold coins',
    '/src/images/juice.jpg'
  );
  const dish = [];
  dish.push(dish1, dish2, dish3, dish4);

  dish.forEach((dish) => {
    const card = document.createElement('div');
    card.classList.add('card');
    dishCard.appendChild(card);
    //dish name
    const name = document.createElement('div');
    name.classList.add('dishName');
    //dish description
    const description = document.createElement('div');
    description.classList.add('description');
    //dish price
    const price = document.createElement('div');
    price.classList.add('price');

    //div for info

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDiv');
    card.appendChild(infoDiv);

    // creating div for images

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    card.appendChild(imgDiv);
    imgDiv.innerHTML = `<img src="..${dish.img}">`;

    infoDiv.appendChild(name);
    infoDiv.appendChild(description);
    infoDiv.appendChild(price);
    name.innerHTML = dish.name;
    description.innerHTML = dish.description;
    price.innerHTML = `${dish.price}`;
  });

  return dishCard;
};

const menu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(menuItems());
  menu.appendChild(background());
  return menu;
};

export default menu();

