/// <mls shortName="ateste" project="102008" enhancement="_100554_enhancementLit" groupName="other" folder="folder1" />

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CollabLitElement } from '_100554_collabLitElement'

@customElement('folder1--ateste-102008')
export class SimpleGreeting extends CollabLitElement {

    //outro teste

    @property() name: string = new Date(Date.now()).toString();

    handleConfirm(e: CustomEvent) {
        console.info(e.detail)
    }


    render() {
        return html`
        <div class="cls1">
            ateste folder
        </div>`;
    }


}