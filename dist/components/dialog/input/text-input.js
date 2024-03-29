import { BaseComponent } from "../../component.js";
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
             <div class="form__container">
                 <input type="text" id="title" placeholder="제목">
            </div>
            <div class="form__container">
                  <textarea type="text" row="3" id="body" placeholder="내용"></textarea>
            </div>
          </div>`);
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
    get body() {
        const element = this.element.querySelector('#body');
        return element.value;
    }
}
