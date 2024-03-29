import { BaseComponent } from "../../component.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
             <div class="form__container">
                 <input type="text" id="title" placeholder="제목">
            </div>
            <div class="form__container">
                  <input type="text" id="url" placeholder="유튜브 비디오 링크">
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

// <label for="title">타이틀</label>
// <label for="url">유얼엘</label>