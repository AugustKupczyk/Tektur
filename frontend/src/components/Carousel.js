import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../assets/images/imagen1.jpeg";
import imagen2 from "../assets/images/imagen2.jpeg";

function CarouselTektur() {
  return (
    <div className="row justify-content-center">
            <Carousel className='responsive-carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide Label</h3>
                        <p>Description of the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide Label</h3>
                        <p>Description of the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
  );
}

export default CarouselTektur;