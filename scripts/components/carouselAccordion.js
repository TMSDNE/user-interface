class CarouselAccordion {
    static of(element) {
        return new CarouselAccordion(element)
    }

    get activeDisplay() {
        return this._activeDisplay
    }

    set activeDisplay(newDisplay) {
        // swap out images
        this._activeDisplay.style.display = 'none'
        this._activeDisplay = newDisplay
        this._activeDisplay.style.display = 'block'

        // hide the current step
        this.steps
            .find(x => parseInt(x.dataset.step) === this.activeIndex + 1)
            .classList.toggle('hidden')

        // update the active index
        this.activeIndex = 
            this.images.findIndex(
                img => img.src === newDisplay.src
            )
        
        // show the next step (based on active image)
        this.steps
            .find(x => parseInt(x.dataset.step) === this.activeIndex + 1)
            .classList.toggle('hidden')
    }

    constructor(element) {
        this.element = element
        this.left = this.element.querySelector('#arrowLeft')
        this.right = this.element.querySelector('#arrowRight')
        this.images = Array.from(this.element.querySelectorAll('img'))
        this.steps = Array.from(document.querySelectorAll('.step'))
        this.activeIndex = 0
        this._activeDisplay = this.images[this.activeIndex]
        this._activeDisplay.style.display = 'block'

        console.log(this.images)

        this.left.addEventListener('click', () => this.displayNextImg('left'))
        this.right.addEventListener('click', () => this.displayNextImg('right'))
    }

    displayNextImg(direction) {
        switch(direction) {
            case 'left': 
                console.log('left clicked!')
                this.activeDisplay = 
                    (this.activeIndex === 0 ) 
                        ? this.images[this.images.length - 1]
                        : this.images[this.activeIndex - 1]

                break
            case 'right': 
                console.log('right clicked!')
                this.activeDisplay = 
                    (this.activeIndex >= this.images.length - 1)
                        ? this.images[0]
                        : this.images[this.activeIndex + 1]
                break
        }
    }
}