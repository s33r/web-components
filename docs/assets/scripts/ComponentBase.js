class ComponentBase extends HTMLElement {
    constructor() {
        super();
    }

    findDocument(name) {
        return  Array.from(document.querySelectorAll('link'))
            .filter((link) => link.href.includes(name))[0].import;
    }

    createDom(document) {
        const template = document.getElementsByTagName('template')[0];
        const style = document.getElementsByTagName('style')[0];

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
