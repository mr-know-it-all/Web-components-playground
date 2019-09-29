window.addEventListener('load', () => {
  for(let i = 0; i < 10; i++) {
    const list = document.querySelector('.info-card-list');
    const infoCard = document.createElement('info-card-component');

    infoCard.setAttribute('title', `title ${i}`);
    infoCard.setAttribute('description', `description ${i}`)
    infoCard.setAttribute('contact', `contact details ${i}`)

    list.appendChild(infoCard);
  }
});
