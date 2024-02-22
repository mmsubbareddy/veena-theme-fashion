class ProductCard extends HTMLElement{
    constructor(){
        super();
    this.productHandle=this.dataset.productHandle;
    this.sectionId=this.dataset.sectionId;
    this.variantsData=JSON.parse(this.querySelector("script").textContent);
    this.variants=this.querySelectorAll(".product-card__each-variant")
    this.variants.forEach(element => 
        element.addEventListener("mouseover",this.onOptionChange.bind(this))
    );

    }

    onOptionChange(event){
        this.selectedVariant=event.target.dataset.value;
        console.log(this.selectedVariant)
        this.currentVariant = this.variantsData.find(item => {
            console.log(item)

        })
        this.getUpdatedProduct()
    }
    getUpdatedProduct(){
        
        this.url=`/products/${this.productHandle}?variant_id=${this.currentVariant.id}&section_id=${this.sectionId}`
        fetch(this.url)
        .then((response)=>response.text())
        .then((responseText)=>{
            const html = new DOMParser().parseFromString(responseText, "text/html");
            this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
        })
    }




}

customElements.define("product-card",ProductCard)




