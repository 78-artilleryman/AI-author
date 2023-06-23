
import {Row } from 'react-bootstrap'
import style from '../style/MyNovels.module.css';
import { useNavigate } from 'react-router-dom';
import BestCards from '../components/BestCards';
import NewCard from '../components/NewCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NovelContext } from '../context/NovelContext';
import { useContext } from 'react';

const MyNovels = () => {
    const { novelTitle, setNovelTitle, novelGenre, setNovelGenre, userName, setNovelId } = useContext(NovelContext);
     
    console.log(userName)
    //작성중인작품
    const [bestData, setBestData] = useState([])
   
    //완성작품
    const [newData, setNewData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const ChapterList = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/novels`, {
              params: {
                name: userName,
                isMine: true,
                isPublic: false
              }
            });
            console.log(response.data);
            setBestData(response.data.dtoList); // 수정: response.data로 변경
          } catch (error) {
            console.log(error);
          }
        };
        ChapterList();
      }, [userName]);
    
      useEffect(() => {
        const ChapterList2 = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/novels`, {
              params: {
                name: userName,
                isMine: true,
                isPublic: true
              }
            });
            console.log(response.data);
            setNewData(response.data.dtoList); // 수정: response.data로 변경
          } catch (error) {
            console.log(error);
          }
        };
        ChapterList2();
      }, [userName]);

    const handleBtn = () => {
        navigate('/insertNovelData');
    }

    const handleTitleClick = async(novelId) => {
        console.log(novelId)
          navigate(`/detail/${novelId}`)
        
       
      }
  return (
    <div>
        <br/>
        <div className={style.name}>
            <h4>{userName}님의 서재입니다!</h4>            
        </div>
        <button className={style.btnNew} onClick={handleBtn}>+새 작품</button>        
        <br/><br/><br/>        
        <h4>작성중인 작품</h4>
        <hr />        
            <Row>                        
            <BestCards bestData={bestData} onClick={handleTitleClick} />
            </Row>        
        <br/><br/>
        <h4>완성된 작품</h4>
        <hr />
        <Row>
            <NewCard newData={newData} onClick={handleTitleClick} />    
        </Row>
        <br/><br/>
    </div>
  )
}

export default MyNovels