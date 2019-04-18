export default class Accordion {
    static of(element) {
        return new Accordion(element)
    }

    constructor(menu) {
      this.menu = menu;
      this.expand = this.menu.querySelector(".accordion__button");
      this.expand.addEventListener("click", this.select.bind(this))
    }
  
    select() {
      this.menu.classList.toggle("reveal");
      console.log(this)
    }
  }
  