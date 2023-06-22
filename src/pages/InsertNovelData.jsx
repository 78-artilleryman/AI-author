import React, { useContext } from 'react';
import { NovelContext } from "../context/NovelContext";
import Button from 'react-bootstrap/Button';
import styles from "../style/InsertNovelData.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const InsertNovelData = () => {
  const { novelTitle, setNovelTitle, novelGenre, setNovelGenre } = useContext(NovelContext);
  const navigate = useNavigate();
  const accessToken  = useSelector((state) => state.authToken);
  console.log(accessToken.accessToken)

  const handleSubmit = () => {
    setNovelGenre(novelGenre);
    setNovelTitle(novelTitle);
   
    
    const novelData = {
      title: novelTitle,
      name: novelGenre,
      isPublic: true
    };  
        
    axios.post('http://localhost:3000/novels/', novelData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken.accessToken}`
      }
    })
    
      .then(response => {        
       console.log(response);
      })
      .catch(error => {        
        console.error(error);
      });
      
      navigate('/ChapterListPage');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Detail of Novel</h1>
        <br />
        <div className={styles.basic}>
          <label className={styles.labels}>소설 제목</label>
          <input
            value={novelTitle}
            onChange={(e) => setNovelTitle(e.target.value)}
          />
          <br /><br />
          <label className={styles.genre}>소설 장르</label>
          <select
            value={novelGenre}
            onChange={(e) => setNovelGenre(e.target.value)}
          >
            <option value="추리">추리</option>
            <option value="스릴러">스릴러</option>
            <option value="공포">공포</option>
            <option value="과학">과학</option>
            <option value="판타지">판타지</option>
            <option value="무협">무협</option>
            <option value="게임">게임</option>
            <option value="로맨스">로맨스</option>
            <option value="퓨전">퓨전</option>
            <option value="미스터리">미스터리</option>
            <option value="범죄">범죄</option>
            <option value="코미디">코미디</option>
            <option value="기타">기타</option>
          </select>
          <br /><br />
          <Button
            type="submit"
            className={styles.btn}
            variant="dark"
            onClick={handleSubmit}
          >
            입력완료
          </Button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default InsertNovelData;