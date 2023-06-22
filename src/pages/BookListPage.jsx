import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from 'react-redux';
import { getCookieToken} from '../storage/Cookie';
import { Container } from "../style/container/Container.styled"
import { Header, MainHeader } from "../style/hearder/Header.styled";
import axios from "axios";
import PageNations from "../components/PageNation"
import { requestToken } from '../api/Users';
import { SET_TOKEN } from '../store/Auth';


const BookListPage = () => {
  const [novels, setNovels] = useState([]);

  const accessToken  = useSelector((state) => state.authToken);
  console.log(accessToken.accessToken)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/novels', {
          params: {
            isBest: true
          },
          headers: {
            'Authorization': 'Bearer ' + accessToken.accessToken,
            'Content-Type': 'application/json'
          }
        });
    
        // 데이터 처리 및 상태 업데이트 등 원하는 작업 수행
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // 오류 처리
      }
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
        <hr />
        <br />
        <div className="row">
          <div className="col">
            <Cards title="책 제목 1" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 2" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 3" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 4" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 5" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 6" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 7" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 8" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 9" content="글쓴이" />
          </div>
          <div className="col">
            <Cards title="책 제목 10" content="글쓴이" />
          </div>
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