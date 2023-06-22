import React from "react";
import styles from "../style/BookGrid.module.css";

function BookGrid(props) {
  const { datas } = props;

  console.log(datas);

  if (!datas || datas.length === 0) {
    return <div>No data available</div>;
  } else {
    return (
      <div>
        {datas.map((data, index) => (
          <div key={index}>
            <img src="img/images.png" alt="Book" />
            <div>
              <h2>{data.title}</h2>
              <p>{data.name}</p>
              <p>{data.genre}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default BookGrid;