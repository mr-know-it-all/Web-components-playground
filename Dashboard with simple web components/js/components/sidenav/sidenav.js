class SidenavComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('header');
    wrapper.setAttribute('class', 'sidenav-component');

    const list = document.createElement('ul');
    list.setAttribute('class', 'sidenav-list');

    const links = this.getAttribute('links').split('--').map(link => link.split('-'));

    for(let [name, url] of links) {
      const listItem = document.createElement('li');
      listItem.setAttribute('class', 'sidenav-list-item');

      const anchor = document.createElement('a');
      anchor.textContent = name;
      anchor.setAttribute('href', url);

      listItem.appendChild(anchor);
      list.appendChild(listItem);
    }

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'js/components/sidenav/sidenav.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(list);
  }
}

customElements.define('sidenav-component', SidenavComponent);
