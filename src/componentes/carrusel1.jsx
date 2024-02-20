import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cocina1 from '../../public/cocina1.jpg';

function Carrucel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='d-flex aling-items-center justify-content-center'>
                  <img className='w-100' src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex aling-items-center justify-content-center'>
                  <img className='w-100' src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex aling-items-center justify-content-center'>
                  <img className='w-100' src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrucel1;