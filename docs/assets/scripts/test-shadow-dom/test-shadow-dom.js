
window.customElements.define('test-shadow-dom', class extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template;
    }

    get template() {
        return `
<style>
    h1 {
        text-decoration: underline;
    }
</style> <!-- styles are scoped to fancy-tabs! -->
<h1>Test Shadow DOM</h1>
`;
    }
});


