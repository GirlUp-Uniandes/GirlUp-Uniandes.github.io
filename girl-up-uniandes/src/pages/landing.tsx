import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../images/Banner1.jpeg';
import Girlafesto from "../components/girlafesto"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            
            <p>Borre todo porque no funcionaba pero ya lo hago jaja</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Girlafesto></Girlafesto>
      </div>
    );
  }
export default function Landing() {
    return (
      <div >
        <ControlledCarousel />
      </div>
    );
  }
  