import React from "react";
import { useEffect, useState } from "react";
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
import axios from "axios";
import { NovelContext } from '../context/NovelContext';
import { useContext } from 'react';



function Main(){
  const accessToken  = useSelector((state) => state.authToken);
  console.log(accessToken);
  const { setUserName } = useContext(NovelContext);
  
  useEffect(() => {
   
    const fetchData = async () => {
      try {
       
        const response = await axios.get('http://localhost:3000/authors/name', {
          headers: {
            Authorization: `Bearer ${accessToken.accessToken}`
          }
        });
        console.log(response.data.name);
        setUserName(response.data.name)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 넣어 useEffect가 한 번만 실행되도록 설정


  return(
    <div id="container">
     
      <Slides />
      <br/><br/>
      <CardTabs />
      <br/><br/>
    </div>
  );
}
export default Main;