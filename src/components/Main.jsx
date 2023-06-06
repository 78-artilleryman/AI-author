import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import "../style/Main.css";
import Book from "./Book";
import Rank from "./Rank";

function Main(){

  return(
    <div id="container">
      <nav>
        <img src={Logo} alt=""></img>
        <div className="menu">
          <Link className="menu-link" to='/login'>로그인</Link>
          <Link className="menu-link" to='/join'>회원가입</Link>
          <Link className="menu-link" to='/imagecreate'>이미지 생성</Link>
        </div>
      </nav>
      <div className="title">
        <h2>작품 리스트</h2>
      </div>
      <div className="sidebar">
       <Rank></Rank>
      </div>
      <div className="contents">
      <Link className="book-link" to='#'><Book></Book></Link>
      <Link className="book-link" to='#'><Book></Book></Link>
      <Link className="book-link" to='#'><Book></Book></Link>
      
      
      </div>
    </div>
  );
}
export default Main;