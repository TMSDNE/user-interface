import Accordion from './components/accordion'
import Carousel from './components/carousel'
import CarouselAccordion from './components/carousel'

const accordions = document.querySelectorAll(".accordion")
const carousels = document.querySelectorAll('.carousel')
const carouselAccordions = document.querySelectorAll('.carousel-accordion')

accordions.forEach(Accordion.of)
carousels.forEach(Carousel.of)
carouselAccordions.forEach(CarouselAccordion.of)
