export default class Headline extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'headline-component');

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
    linkElem.setAttribute('href', 'js/components/headline/headline.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(description);
  }
}
