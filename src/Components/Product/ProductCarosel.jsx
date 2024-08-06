import Carousel from 'react-bootstrap/Carousel';
import './ProductCarosel.css'
import image1 from '../assets/intrax.png'
import image2 from '../assets/intrax2.png'
import image3 from '../assets/intrax3.png'
function ProductCarousel() {
  return (
    <Carousel >
      <Carousel.Item interval={5000}>
       <img src={image1}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img src={image2}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img src={image3}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;