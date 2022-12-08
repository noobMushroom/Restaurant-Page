import bgImage from '../images/contactDivbackground2.jpg';
const contact = () => {
  const background = document.createElement('div');
  background.classList.add('background');
  const backgroundImage = document.createElement('img');
  backgroundImage.classList.add('backgroundImage');
  backgroundImage.src = bgImage;
  background.appendChild(backgroundImage);
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contactInfo');
  contact.appendChild(contactInfo);
  const phoneNumbers = document.createElement('div');
  phoneNumbers.classList.add('phoneNumbers');
  phoneNumbers.innerHTML = '111-222-3333<br>222-333-4444<br>555-666-7777';
  const email = document.createElement('div');
  email.classList.add('email');
  email.innerHTML =
    'adurianspicy@galactica.com<br>aduriandinner@galactica.com<br>adurianbreakfast@galactica.com';
  const address = document.createElement('div');
  address.classList.add('address');
  address.innerHTML = `1944 Monroe Avenue<br>SIOUX CITY, Iowa(IA),51108<br>941-756-2804 <br> 9879 Jupiter `;

  contactInfo.appendChild(phoneNumbers);
  contactInfo.appendChild(email);
  contactInfo.appendChild(address);
  contactInfo.appendChild(background);

  return contact;
};

export default contact();

