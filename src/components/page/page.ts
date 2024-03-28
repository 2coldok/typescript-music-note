// <ul class="page">This is PageComponent</ul> 태그를 element 를 생성함
// attachTo() 메서드에 부모요소와 포지션을 삽입하면 
// 그 부모요소의 포지션에 element 를 삽입함

export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is Pagecomponent';
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}


