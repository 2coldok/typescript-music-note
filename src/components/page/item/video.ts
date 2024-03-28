import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
             <div class="video__player"><iframe class="video__iframe"></iframe></div>
             <h3 class="video__title"></h3>
           </section>`);
    
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbededURL(url);

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbededURL(url: string): string {
    return `https://www.youtube.com/embed/${this.getVideoId(url)}`;
  }

  private getVideoId(youtubeURL : string): string | undefined {
    if (youtubeURL.includes('?si=')) {
      const array = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/');
      const videoId: string | undefined = array[array.length - 1];
      return videoId;
    }
  
    if (youtubeURL.includes('&list=')) {
      const array = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=');
      const videoId: string | undefined = array[array.length - 1];
      return videoId
    }
  
    const array = youtubeURL.split('watch?v=');
    const videoId: string | undefined = array[array.length - 1];
    return videoId;
  } 
}
