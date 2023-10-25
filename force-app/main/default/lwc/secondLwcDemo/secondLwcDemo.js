import { LightningElement } from 'lwc';

export default class SecondLwcDemo extends LightningElement {
    connectedCallback(){
        console.log('You clicked the button!');
    }
}