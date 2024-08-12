// Define the custom X-Tag element
class TitleTag extends HTMLElement {
    constructor() {
        super(); // Call the super constructor
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<h3><slot></slot></h3>`;
    }
}

// Define another custom X-Tag element
class FrankensteinTag extends HTMLElement {
    constructor() {
        super(); // Call the super constructor
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div>It's alive!</div>`;
    }
}

// Register the custom elements
customElements.define('title-tag', TitleTag);
customElements.define('x-frankenstein', FrankensteinTag);