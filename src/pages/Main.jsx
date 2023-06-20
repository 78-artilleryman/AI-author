import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import "../style/Main.css";
import BookList from "../components/BookList";
import RankList from "../components/RankList";
import NavList from "../components/NavList";
import data from "../testData.json";


function Main(){

  const navigate = useNavigate();

  return(
    <div id="container">
      <NavList></NavList>
      <div className="title">
        <h2>작품 리스트</h2>
      </div>
      <div className="sidebar">
        <h2>인기순위</h2>
       <RankList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></RankList>
      </div>
      <div className="contents">
        
        <BookList datas={data} onClickItem={(item) =>{
           navigate(`#`)
        }}></BookList>
      
      </div>
    </div>
  );
}
export default Main;