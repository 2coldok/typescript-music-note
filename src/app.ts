import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { NoteComponent } from "./components/page/item/note.js";
// import { ImageComponent } from "./components/page/item/image.js";
// import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

type InputComponentConstructor<T = MediaSectionInput | TextSectionInput > = {
  new (): T;
}

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // this.bindElementToDialog<MediaSectionInput>(
    //   '#new-image',
    //   MediaSectionInput,
    //   (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    // );

    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    // this.bindElementToDialog<TextSectionInput>(
    //   '#new-todo',
    //   TextSectionInput,
    //   (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    // );
    
   

    // const imageBtn = document.querySelector('#new-image') as HTMLButtonElement;
    // imageBtn.addEventListener('click', () => {
    //   const dialog = new InputDialog();
    //   const inputSection = new MediaSectionInput();
    //   dialog.addChild(inputSection);
    //   dialog.attachTo(dialogRoot);

    //   dialog.setOnCloseListener(() => {
    //     dialog.removeFrom(dialogRoot);
    //   })

    //   dialog.setOnSubmitListener(() => {
    //     const image = new ImageComponent(inputSection.title, inputSection.url);
    //     this.page.addChild(image);
    //     dialog.removeFrom(dialogRoot);
    //   })

    //   dialog.attachTo(dialogRoot);
    // })
  }

  private bindElementToDialog<T extends MediaSectionInput | TextSectionInput>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
    ) {
    const element = document.querySelector(selector) as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      })

      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      })

      dialog.attachTo(this.dialogRoot);
    })
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
