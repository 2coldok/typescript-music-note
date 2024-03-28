// <ul class="page">This is PageComponent</ul> 태그를 element 를 생성함
// attachTo() 메서드에 부모요소와 포지션을 삽입하면 
// 그 부모요소의 포지션에 element 를 삽입함

import { BaseComponent } from "../component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">이건 페이지 컴포넌트</ul>');
  }
}


