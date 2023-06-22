import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import BookList from "../components/BookList";
import RankList from "../components/RankList";
import NavList from "../components/NavList";
import data from "../testData.json";
import style from "../style/Main.module.css"
import { styled } from "styled-components";
import { Cookies } from "react-cookie";


const cookies = new Cookies();


console.log(cookies.get('refresh_token'));

function Main(){

  const navigate = useNavigate();

  return(
    <div id={style.container}>
      <NavList></NavList>
      <div className={style.title}>
        <h2>작품 리스트</h2>
      </div>
      <div className={style.sidebar}>
        <h2>인기순위</h2>
       <RankList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></RankList>
      </div>
      <div className={style.contents}>
        
        <BookList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></BookList>
      
      </div>
    </div>
  );
}
export default Main;