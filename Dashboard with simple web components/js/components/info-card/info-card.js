class InfoCardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'info-card');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon')

    icon.addEventListener('click', () => {
      const contactDetails = this.getAttribute('contact');
      console.log('click!', contactDetails);
    })

    const title = document.createElement('div');
    title.setAttribute('class', 'title');

    const description = document.createElement('div');
    description.setAttribute('class', 'description');

    const titleText = this.getAttribute('title');
    title.textContent = titleText;

    const descriptionText = this.getAttribute('description');
    description.textContent = descriptionText;

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'js/components/info-card/info-card.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(title);
    wrapper.appendChild(description);
  }

  connectedCallback() {
    const titleText = this.getAttribute('title');
    const descriptionText = this.getAttribute('description');

    this.shadowRoot.querySelector('.title').textContent = titleText;
    this.shadowRoot.querySelector('.description').textContent = descriptionText;
  }
}

customElements.define('info-card-component', InfoCardComponent);
