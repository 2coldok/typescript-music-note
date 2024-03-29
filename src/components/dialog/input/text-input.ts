import { BaseComponent } from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
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

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get body(): string {
    const element = this.element.querySelector('#body')! as HTMLInputElement;
    return element.value;
  }
}
