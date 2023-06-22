import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src='img/images.png' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Link to="/WriteChapter"><Button variant="dark">내용 보러 가기</Button></Link>
      </Card.Body>
    </Card>

    
  );
}

export default Cards;