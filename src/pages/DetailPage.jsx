import React from "react";
import style from "../style/DetailPage.module.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import {useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import DetailPageList from "../components/DetailPageList";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const accessToken = useSelector((state) => state.authToken);
  const { novelId } = useParams();
  
  //챕터 리스트
  const [chaterList, setChapterList] = useState([]);

  //소설 데이터
  const [nobelData, setNovelData] = useState({});
  console.log(chaterList);

  const navigate = useNavigate();
  
 //챕터리스트 불러오기
  useEffect(() => {
    const ChapterList = async() => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`;
        const response =  await axios.get(`http://localhost:3000/chapters?novelId=${novelId}`, {
        }).then(function(response) {
          console.log(response);
        setChapterList(response.data.dtoList)
        });
      } catch (error) {
        console.log(error);
      }
    }
    ChapterList()
  }, []); // 빈 배열을 넣어 useEffect가 한 번만 실행되도록 설정

  //소설 불러오기
  useEffect(() => {
    const ChapterList = async() => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`;
        const response =  await axios.get(`http://localhost:3000/novels/${novelId}`, {
        }).then(function(response) {
          console.log(response.data);
          setNovelData(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
    ChapterList()
  }, []); // 빈 배열을 넣어 useEffect가 한 번만 실행되도록 설정

  const openBookView = async (chapterId) =>{
    console.log(chapterId)
    navigate(`/bookview/${chapterId}`)
  }
  
  return(
    <div className={style.container}>
      <img src="img/images.png" alt="page"></img>
      <div className={style.bookData}>
        <h2>{nobelData.title}</h2>
        <h3>{nobelData.name}</h3>
        <p>좋아요 ㅁ</p>
        <div>
         <DetailPageList datas={chaterList} onClick={openBookView}></DetailPageList>
        </div>
      </div>
      
    </div>
  );
}export default DetailPage;