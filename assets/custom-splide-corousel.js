class CustomSplideCorousel extends HTMLElement {
    constructor() {
      super();
      this.element = this.querySelector(".splide");
      this.splideList = this.querySelector(".splide__list");
      this.initializeSlider();
    }
    initializeSlider() {
      const options = JSON.parse(this.getAttribute("data-options"));
      var splide = new Splide(this.element, options);
      splide.mount();
    }
  }
  
  customElements.define("custom-splide-corousel", CustomSplideCorousel);  