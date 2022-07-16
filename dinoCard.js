class DinoCard extends HTMLElement {
    constructor(){
        super()
        const name = this.getAttribute('name')
        const img = this.getAttribute('img')
        const diet = this.getAttribute('diet')
        const length = this.getAttribute('length')
        const weight = this.getAttribute('weight')
        
        let template = document.querySelector('#template')
        let templateHTML = template.content
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateHTML.cloneNode(true))

        this.shadowRoot.querySelector('#name').innerText = name
        this.shadowRoot.querySelector('#img').setAttribute('src', img)
        this.shadowRoot.querySelector('#diet-val').innerText = diet
        this.shadowRoot.querySelector('#length-val').innerText = length
        this.shadowRoot.querySelector('#weight-val').innerText = weight
    }
}

window.customElements.define('dino-card', DinoCard)