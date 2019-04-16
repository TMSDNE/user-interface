class Carousel {
    static of(element) {
        return new Carousel(element)
    }

    get activeDisplay() {
        return this._activeDisplay
    }

    set activeDisplay(newDisplay) {
        this._activeDisplay.style.display = 'none'
        this.activeIndex = 
            this.images.findIndex(
                img => img.src === newDisplay.src
            )
        this._activeDisplay = newDisplay
        this._activeDisplay.style.display = 'block'
    }

    constructor(element) {
        this.element = element
        this.left = this.element.querySelector('.left-button')
        this.right = this.element.querySelector('.right-button')
        this.images = Array.from(this.element.querySelectorAll('img'))
        this.activeIndex = 0
        this._activeDisplay = this.images[this.activeIndex]
        this._activeDisplay.style.display = 'block'

        this.left.addEventListener('click', () => this.displayNextImg('left'))
        this.right.addEventListener('click', () => this.displayNextImg('right'))
    }

    displayNextImg(direction) {
        switch(direction) {
            case 'left': 
                this.activeDisplay = 
                    (this.activeIndex <=1) 
                        ? this.images[this.images.length - 1]
                        : this.images[this.activeIndex - 1]

                break
            case 'right': 
                this.activeDisplay = 
                    (this.activeIndex >= this.images.length - 1)
                        ? this.images[0]
                        : this.images[this.activeIndex + 1]
                break
        }
    }

}
