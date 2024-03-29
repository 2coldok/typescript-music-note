import { BaseComponent } from "../component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<dialog class="dialog">
             <div class="dialog__container">
              
                <div id="dialog__body"></div>
                <div class="button__container">
                  <button class="dialog__submit">Add</button>
                  <button class="close" id="dialog__close">Cancel</button>
                </div>
                
             </div>
          </dialog>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector('.dialog__submit');
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('#dialog__body');
        child.attachTo(body);
    }
}
