import Carousel from 'react-bootstrap/Carousel';
import './ProductCarosel.css'
import image1 from '../../assets/product/2mp-low-light-hdr-usb3-camera.png'
import image2 from '../../assets/product/superior-low-light-camera-enclosure.png'
import image3 from '../../assets/product/superior-low-light-usb-camera.png'
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