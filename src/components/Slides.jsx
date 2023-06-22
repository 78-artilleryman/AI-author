import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  const style = {
    width: "1000px",
  }

  return (
    <Carousel>
      <Carousel.Item>
        <img style={style}
          className="d-block w-100"
          src="img/icc_join.jpg"
          alt="First slide"
        />
        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={style}
          className="d-block w-100"
          src="img/ccc.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={style}
          className="d-block w-100"
          src="img/chrismas.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;