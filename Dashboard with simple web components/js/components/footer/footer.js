class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('header');
    wrapper.setAttribute('class', 'footer-component');

    const message = document.createElement('div');
    message.setAttribute('class', 'message');

    const copyright = document.createElement('div');
    copyright.setAttribute('class', 'copyright');

    const messageText = this.getAttribute('message');
    message.textContent = messageText;

    const copyrightText = this.getAttribute('copyright');
    copyright.textContent = copyrightText;

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'js/components/footer/footer.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(message);
    wrapper.appendChild(copyright);
  }
}

customElements.define('footer-component', FooterComponent);
