import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  const style = {
    width: "1200px",
  }

  return (
    <Carousel>
      <Carousel.Item> 
        <img 
        style={style}
          className="d-block w-100"
          src="img/qqq.jpg"
          alt="First slide"
        />
        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={style}
          className="d-block w-100"
          src="img/www.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={style}
          className="d-block w-100"
          src="img/eeee.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;