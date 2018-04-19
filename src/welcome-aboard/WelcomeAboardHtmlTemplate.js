import templateHtmlString from './welcome-aboard-template.html';

class WelcomeAboardHtmlTemplate extends HTMLElement {

  get name() {
    return this.name;
  }

  set name(v) {
    if (v){
      this.setAttribute("name", v);
      this.shadowRoot.querySelector('.name').innerHTML = v;
    }
  }
  
  connectedCallback() {
    var shadow = this.attachShadow({mode: 'open'});
    let doc = new DOMParser().parseFromString(templateHtmlString.trim(), 'text/html');
    var t = doc.getElementById('welcome-aboard-template');
    var clone = document.importNode(t.content, true);
    shadow.appendChild(clone);

    this.name = this.getAttribute('name');
  }

}

customElements.define('welcome-aboard-html-template', WelcomeAboardHtmlTemplate);