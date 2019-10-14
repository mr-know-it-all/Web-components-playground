const getPatterm = type => (
  (type === 'date' ? {
    type: 'simple',
    value: 'DD-DD-DDDD'
  } : null)
);
const getSeparator = type => (type === 'date' ? '-' : null);

const applyPattern = format => value => {
  const separator = format.separator;
  const pattern = format.pattern;
  const patternType = pattern.type;
  const patternValue = pattern.value;
  let appliedPattern = '';
  for (let i = 0, accum = 0; i < value.length; i++) {
    if (patternValue[i + accum] === undefined) break;
    if (patternValue[i + accum] === separator) {
      appliedPattern += (separator + value[i]);
      accum += 1;
    } else {
      appliedPattern += value[i];
    }
  }
  return appliedPattern;
}
class InputMask extends HTMLElement {
  constructor() {
    super();
    console.log('constructed!');
    const type = this.getAttribute('type');
    this.format = {
      pattern: getPatterm(type),
      separator: getSeparator(type)
    };
    const shadow = this.attachShadow({
      mode: 'open'
    });
    const input = document.createElement('input');
    input.addEventListener('keypress', e => {
      // TODO: add selection into account, enable edits anywhere in the input
      // TODO: test for valid values according to type
      console.log('keypress');
      e.preventDefault();
      const separator = this.format.separator;
      const key = String(e.key);
      const separatorPattern = new RegExp(separator, 'g');
      const prevValue = String(input.value).replace(separatorPattern, '');
      const newValue = applyPattern(this.format)(`${prevValue}${key}`);
      input.value = newValue;
    })
    input.addEventListener('change', e => {
      console.log('change', e.target.value);
    })
    shadow.appendChild(input)
  }
  static get observedAttributes() {
    return ['value'];
  }
  connectedCallback() {
    console.log('connected!');
  }
  disconnectedCallback() {
    console.log('disconnected!');
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`);
  }
  adoptedCallback() {
    console.log('adopted!');
  }
}
customElements.define('input-mask', InputMask);
