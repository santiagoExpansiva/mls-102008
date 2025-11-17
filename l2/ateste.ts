/// <mls shortName="ateste" project="102008" enhancement="_100554_enhancementLit" groupName="other" /> 

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CollabLitElement } from './_100554_collabLitElement'
import './_102008_folder1/ateste';

@customElement('ateste-102008')
export class SimpleGreeting extends CollabLitElement {

//teste
    @property() name: string = new Date(Date.now()).toString();

    handleConfirm(e: CustomEvent) {
        console.info(e.detail)
    }


    showGreetingAlert() {
        alert(`Hello world Lucas 10`);
    }

    render() {
        return html`
        <div class="cls1">
            <h1>Hello world Lucas 10</h1>
            <button @click="${this.showGreetingAlert}">Show Greeting</button>
        </div>
        <folder1--ateste-102008></folder1--ateste-102008>`;
    }


}