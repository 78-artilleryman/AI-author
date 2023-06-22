import Pagination from 'react-bootstrap/Pagination';

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const PageNations = () => {
  return (
    <div>
    <Pagination size="sm">{items}</Pagination>
  </div>
 );  
}

export default PageNations;

