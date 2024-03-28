import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('your Image title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const note = new NoteComponent('your note title', 'your note body');
        this.page.addChild(note);
        const todo = new TodoComponent('your Todo title', 'your todo');
        this.page.addChild(todo);
        const video = new VideoComponent('your video title', 'https://www.youtube.com/watch?v=aoD5h8FkJ4c');
        this.page.addChild(video);
    }
}
new App(document.querySelector('.document'));
