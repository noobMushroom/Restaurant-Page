import { divide } from 'lodash';
import bgImage from '../images/steampunk-5627683-min.png';
import images from '../images/logo4.jpg';

const homepageBackground = () => {
  const background = document.createElement('div');
  background.classList.add('background');
  const backgroundImage = document.createElement('img');
  backgroundImage.classList.add('backgroundImage');
  backgroundImage.src = bgImage;
  background.appendChild(backgroundImage);
  return background;
};

const introduction = () => {
  const introPara = document.createElement('div');
  introPara.classList.add('introPara');

  const img = document.createElement('img');
  img.classList.add('logoImg');

  img.src = images;
  introPara.appendChild(img);

  const para = document.createElement('p');
  para.classList.add('para');

  para.innerHTML = 'Welcome to <b>ANDURIAN RESTAURANTS</b>';
  introPara.appendChild(para);
  return introPara;
};

function homepage() {
  const intro = document.createElement('div');
  intro.classList.add('intro');
  intro.appendChild(homepageBackground());
  intro.appendChild(introduction());
  return intro;
}

export default homepage();
