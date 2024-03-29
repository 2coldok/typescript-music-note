import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
             <h3 class="video__title"></h3>
             <div class="video__player"><iframe class="video__iframe"></iframe></div>
           </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = this.convertToEmbededURL(url);
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    convertToEmbededURL(url) {
        return `https://www.youtube.com/embed/${this.getVideoId(url)}`;
    }
    getVideoId(youtubeURL) {
        if (youtubeURL.includes('?si=')) {
            const array = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/');
            const videoId = array[array.length - 1];
            return videoId;
        }
        if (youtubeURL.includes('&list=')) {
            const array = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=');
            const videoId = array[array.length - 1];
            return videoId;
        }
        const array = youtubeURL.split('watch?v=');
        const videoId = array[array.length - 1];
        return videoId;
    }
}
