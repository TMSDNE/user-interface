class CarouselAccordion {
    static of(element) {
        return new CarouselAccordion(element)
    }

    get activeDisplay() {
        return this._activeDisplay
    }

    set activeDisplay(newDisplay) {
        // this._activeDisplay.style.display = 'none'
        // this._activeDisplay = newDisplay
        // this._activeDisplay.style.display = 'block'
        
        // swap out images
        swap(this._activeDisplay, newDisplay)   // 1

        // this.steps
        //     .find(x => parseInt(x.dataset.step) === this.activeIndex + 1)

        const hideCurrentStep = showNextStep = pipe(
            find(
                function doesStepMatchIndex(x, y) {
                    return parseInt(x.dataset.step) === (this.activeIndex + 1)
                }
            ),
            toggleClass('hidden')
        )

        // hide the current step
        hideCurrentStep(this.steps)     // 2

        // update the active index
        const updateActiveIndex = () => {
            this.activeIndex = 
            this.images.findIndex(
                img => img.src === newDisplay.src
            )
        }

        updateActiveIndex()     // 3
        
        // this.steps
        //     .find(x => parseInt(x.dataset.step) === this.activeIndex + 1)
        //     .classList.toggle('hidden')
        
        // show the next step (based on active image)
        showNextStep(this.steps)        // 4

        
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


/**
 * -----------Helpers----------------
 */

 function swap(old, next) {
    // swap out images
    old.style.display = 'none'
    this._activeDisplay = next
    old.style.display = 'block'

    return [old, next]
 }

 function find(fn) {
    return function(xs) {
        return xs.find(fn)
    }
 }


function toggleClass(el) {
    return function(...classes) {
        classes.forEach(c => el.classList.toggle(c))
        return [el, el.classList]
    }
}
 
function pipe(...fns) { 
    return function(i) {
        return fns.reduce((v, f) => f(v), i)
    }
}