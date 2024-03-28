import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
             <div class="video__player"><iframe class="video__iframe"></iframe></div>
             <h3 class="video__title"></h3>
           </section>`)
    
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = 'https://www.youtube.com/embed/aoD5h8FkJ4c';
    console.log(url)

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// function getVideoId(youtubeURL : string): string {
//   if (youtubeURL.includes('?si=')) {
//     const array = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/');
//     const videoId = array[array.length - 1];
//     return videoId;
//   }

//   if (youtubeURL.includes('&list=')) {
//     const videoId = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=').at(-1);
//     return videoId;
//   }

//   const videoId = youtubeURL.split('watch?v=').at(-1);
//   return videoId;
// };