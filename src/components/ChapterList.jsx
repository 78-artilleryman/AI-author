import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { NovelContext } from '../context/NovelContext';

function ChapterList() {
  const { novelTitle, novelGenre } = useContext(NovelContext);

  return (
    <ListGroup>
      <ListGroup.Item 
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> {novelTitle} / 글쓴이 / {novelGenre} </div>          
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeChapter"><div className="fw-bold">chapter1 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeChapter"><div className="fw-bold">chapter2 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeChapter"><div className="fw-bold">chapter3 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeChapter"><div className="fw-bold">chapter4 쓰기</div></Link>
        </div>        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <Link to = "/writeChapter"><div className="fw-bold">chapter5 쓰기</div></Link>
        </div>        
      </ListGroup.Item>      
    </ListGroup>
  );
}

export default ChapterList;