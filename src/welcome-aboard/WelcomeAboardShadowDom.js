class WelcomeAboardShadowDom extends HTMLElement {

  get name() {
    return this.name;
  }

  set name(v) {
    if (v){
      this.setAttribute("name", v);
      this.shadowRoot.querySelector('span').innerHTML = v;
    }
  }

  connectedCallback() {
    var shadow = this.attachShadow({mode: 'open'});
    var span = document.createElement('span');
    span.innerHTML = this.getAttribute('name');
    span.style= "color:blue";
    shadow.appendChild(span);
  }

}

customElements.define('welcome-aboard-shadowdom', WelcomeAboardShadowDom);