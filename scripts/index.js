import Accordion from './components/accordion'
import Carousel from './components/carousel'

const accordions = document.querySelectorAll(".accordion")
const carousels = document.querySelectorAll('.carousel')

accordions.forEach(Accordion.of)
carousels.forEach(Carousel.of)
