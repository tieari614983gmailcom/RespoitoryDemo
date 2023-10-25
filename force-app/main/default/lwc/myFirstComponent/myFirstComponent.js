import { LightningElement } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    showMessage = false;
    message = '';

    handleButtonClick() {
        this.showMessage = true;
        this.message = 'You clicked the button!';

    }
}
