// const carousels = document.querySelectorAll('.carousel')
class Accordion{
    constructor(menu){
        this.menu = menu
        this.expand = this.menu.querySelector(".accordion__button")
        this.expand.addEventListener("click", ()=>{
        this.select()
        })
    }

    select(){
        this.menu.classList.toggle("accordion__show")
       
    }
}


















const accordion = document.querySelectorAll('.accordion')

accordion.forEach((menu)=>{

    return new Accordion(menu)
})


