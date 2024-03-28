import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent('your Image title', 'https://picsum.photos/600/300');
    this.page.addChild(image);
    
    const note = new NoteComponent('your note title', 'your note body');
    this.page.addChild(note);

    const todo = new TodoComponent('your Todo title', 'your todo');
    this.page.addChild(todo);

    const video = new VideoComponent('your video title', 'https://www.youtube.com/watch?v=aoD5h8FkJ4c');
    this.page.addChild(video);

    const imageBtn = document.querySelector('#new-image') as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      })

      dialog.setOnSubmitListener(() => {
        // 섹션 추가 후 페이지에 추가.
        dialog.removeFrom(document.body);
      })

      dialog.attachTo(document.body);
    })
  }
}

new App(document.querySelector('.document')! as HTMLElement);

