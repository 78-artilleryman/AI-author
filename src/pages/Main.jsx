import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import BookList from "../components/BookList";
import RankList from "../components/RankList";
import NavBarElements from "../components/NavBarElements"
import { useDispatch, useSelector } from 'react-redux';
import data from "../testData.json";
import style from "../style/Main.module.css"
import { styled } from "styled-components";
import { Cookies } from "react-cookie";
import CardTabs from "../components/CardTabs";
import Slides from "../components/Slides";
import { DELETE_TOKEN } from '../store/Auth';



function Main(){
  const accessToken  = useSelector((state) => state.authToken);
  console.log(accessToken)
  console.log(accessToken.authenticated)



  return(
    <div id="container">
      <NavBarElements at={accessToken.authenticated}></NavBarElements>
      <Slides />
      <br/><br/>
      <CardTabs />
      <br/><br/>
    </div>
  );
}
export default Main;