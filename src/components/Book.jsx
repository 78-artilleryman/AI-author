import React from "react";
import cover from "../images/StartImage1.jpeg"
import "../style/Book.css"

function Book() {

  return(
    <div className="Book">
      <img src={cover} alt="" />
      <div className="explanation">
        <h2>제목 : 아기돼지삼형제</h2>
        <p>작가 : 윤병현</p>
        <p>페이지수 : 100</p>
      </div>
    </div>
  );

}
export default Book;