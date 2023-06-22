import React, { useState, useEffect } from "react";
import BookGrid from "../components/BookGrid";
import { useDispatch, useSelector } from 'react-redux';
import { getCookieToken} from '../storage/Cookie';
import { Container } from "../style/container/Container.styled"
import { Header, MainHeader } from "../style/hearder/Header.styled";
import axios from "axios";
import style from "../style/BookListPage.module.css"
import PageNations from "../components/PageNation"
import { requestToken } from '../api/Users';
import { SET_TOKEN } from '../store/Auth';
import Stack from 'react-bootstrap/Stack';


const BookListPage = () => {
  const [novels, setNovels] = useState([]);

  const [datas, setDatas] = useState({});
 

  const accessToken  = useSelector((state) => state.authToken);
 
  
 
  useEffect(() => {
    const sendParam = {
      isBest: true
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`
    const headers = {
      'Content-Type': "application/json",
      'Accept': "application/json"
    }
    const fetchData = async () => {
      axios({
        method: 'get',
        url: 'http://localhost:3000/novels',
        params: {
          "isBest": true
        }
      }).then((Response)=>{
          setDatas(Response.data);
      }).catch((Error)=>{
          console.log(Error);
      })
    };

    fetchData();
  }, []); // 빈 배열을 넣어 useEffect가 한 번만 실행되도록 설정



  return (
    <div>
    <Container>
      <Header>
        <MainHeader>
          <h1>소설 게시판</h1>
        </MainHeader>
      </Header>
    <br/><br/>      
    <div className={style.genre}>
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">전체</div>
      <div className="p-2">추리</div>
      <div className="p-2">스릴러</div>
      <div className="p-2">공포</div>
      <div className="p-2">과학</div>
      <div className="p-2">판타지</div>
      <div className="p-2">무협</div>
      <div className="p-2">게임</div>
      <div className="p-2">로맨스</div>
      <div className="p-2">퓨전</div>
      <div className="p-2">미스터리</div>
      <div className="p-2">범죄</div>
      <div className="p-2">코미디</div>
      <div className="p-2">기타</div>
   </Stack>
   </div>
    <hr />
    <div>
    <BookGrid datas={datas.dtoList}></BookGrid>
    </div>
      <br />
      <div className="d-flex justify-content-center">
        <PageNations />
      </div>
    </Container>
  </div>
);
};

export default BookListPage;