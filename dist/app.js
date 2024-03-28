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
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('your note title', 'your note body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('your Todo title', 'your todo');
        todo.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('your video title', 'https://www.youtube.com/embed/aoD5h8FkJ4c');
        video.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
