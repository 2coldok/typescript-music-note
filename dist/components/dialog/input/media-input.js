import { BaseComponent } from "../../component.js";
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
             <div class="form__container">
                 <input type="text" id="title" placeholder="음악 제목">
            </div>
            <div class="form__container">
                  <input type="text" id="url" placeholder="유튜브 링크">
            </div>
          </div>`);
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
    get url() {
        const element = this.element.querySelector('#url');
        return element.value;
    }
}
