import Header from './components/header/header.js';
import Sidenav from './components/sidenav/sidenav.js';
import Headline from './components/headline/headline.js';
import InfoCard from './components/info-card/info-card.js';
import Footer from './components/footer/footer.js';

customElements.define('header-component', Header);
customElements.define('sidenav-component', Sidenav);
customElements.define('headline-component', Headline);
customElements.define('info-card-component', InfoCard);
customElements.define('footer-component', Footer);

document.addEventListener('DOMContentLoaded', () => {
  for(let i = 0; i < 10; i++) {
    const list = document.querySelector('.info-card-list');
    const infoCard = document.createElement('info-card-component');

    infoCard.setAttribute('title', `title ${i}`);
    infoCard.setAttribute('description', `description ${i}`)
    infoCard.setAttribute('contact', `contact details ${i}`)

    list.appendChild(infoCard);
  }
});
