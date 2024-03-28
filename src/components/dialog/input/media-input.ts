import { BaseComponent } from "../../component.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
             <div class="form__container">
                 <label for="title">타이틀입력</label>
                 <input type="text" id="title">
            </div>
            <div class="form__container">
                  <label for="url">유얼엘</label>
                  <input type="text" id="url">
            </div>
          </div>`);
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}