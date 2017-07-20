window.customElements.define('test-shadow-dom-slot', class extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template;
    }

    get template() {
        return `
<style>
    div {
        border: solid thin black;
        padding: 20px;
    }
</style> <!-- styles are scoped to fancy-tabs! -->
<div>
    <p>This is a shadow dom with a slot:</p>
    <slot></slot>
</div>
`;
    }
});


