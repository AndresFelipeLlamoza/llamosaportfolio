import Carousel from 'react-bootstrap/Carousel';
import images from '../hooks/images'
import '../App.css'

function HomeSlider() {
  return (
    <Carousel fade className="carouselCont" controls={false} indicators={false}>
      <Carousel.Item interval={5000}>
      <img className='imgPerfil1' src={images.miperfil1} width={250} alt="" srcset="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img className='imgPerfil1' src={images.miperfil2} width={250} alt="" srcset="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img className='imgPerfil1' src={images.miperfil3} width={250} alt="" srcset="" />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;