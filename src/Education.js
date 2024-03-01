import * as React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from "./images/1-hansel.png";
import CarouselImage2 from "./images/2-ccdps.png";
import CarouselImage3 from "./images/3-cnhs.png";
import CarouselImage4 from "./images/4-ncf.png";

function Education() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={CarouselImage1} alt="First slide" style={{ margin: "auto", width: "100%" }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage2} alt="Second slide" style={{ margin: "auto", width: "100%" }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage3} alt="Third slide" style={{ margin: "auto", width: "100%" }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage4} alt="Fourth slide" style={{ margin: "auto", width: "100%" }}/>
        </Carousel.Item>
      </Carousel>
    );
}

export default Education;