import React from "react";
import { Link } from "react-router-dom";
import "../style/Start.css"
import StartImage1 from '../images/StartImage.jpeg'
import StartImage2 from '../images/StartImage1.jpeg'
import StartImage3 from '../images/StartImage3.jpeg'



function Start() {  

  return(
    <div className="start-page">
      <div className="left">
        <h2>AI와 함께 작가의 꿈을 키워보세요</h2>
        <p>누구나<br/>작가가 될 수 있다</p>
        <Link  className="start-button" to="/main">시작하기</Link>
      </div>
      <div className="right">
        <div className="top">
          <img className="image1" src={StartImage1} art=""></img>
          <img className="image2"src={StartImage2} art=""></img>
        </div>
        <img className="image3"src={StartImage3} art=""></img>
      </div>
    </div>
  );
}
export default Start;