import React, { useContext, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { NovelContext } from '../context/NovelContext';

function ChapterList() {
  const { novelTitle, novelGenre } = useContext(NovelContext);
  const [chapterCount, setChapterCount] = useState(1); // 챕터 개수를 관리하는 상태

  const handleAddChapter = () => {
    if (chapterCount < 10) {
      setChapterCount(prevCount => prevCount + 1); // 챕터 개수를 1 증가시킴
    }
  };

  const renderChapterItems = () => {
    const chapterItems = [];
    for (let i = 1; i <= chapterCount; i++) {
      chapterItems.push(
        <ListGroup.Item
          key={i}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <Link to="/writeChapter">
              <div className="fw-bold">chapter{i} 쓰기</div>
            </Link>
          </div>
        </ListGroup.Item>
      );
    }
    return chapterItems;
  };

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
      {renderChapterItems()}
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <button onClick={handleAddChapter} className="btn btn-outline-primary">
            챕터 추가
          </button>
        </div>        
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ChapterList;