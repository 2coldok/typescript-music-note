// <ul class="page">This is PageComponent</ul> 태그를 element 를 생성함
// attachTo() 메서드에 부모요소와 포지션을 삽입하면 
// 그 부모요소의 포지션에 element 를 삽입함

import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // 생성자 정의하는 타입
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
              <div class="page-item__controls">
                <button class="close">delete</button>
              </div>
              <section class="page-item__body"></section>
          </li>`)
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    }      
  }

  // child : Component interface를 구현하는 어떤 class 던 가능 
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container); // li속 section자리에 child 삽입
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });  
  }
}
