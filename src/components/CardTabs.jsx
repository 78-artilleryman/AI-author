import Tabs from "react-bootstrap/Tabs";
import { Tab, TabContent, Container } from "react-bootstrap";
import NewCard from "./NewCard";
import BestCards from "./BestCards";
import React from "react";
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector } from 'react-redux';


function CardTabs(props) {
  const accessToken = useSelector((state) => state.authToken);
 

  const navigate = useNavigate();

  //인기 소설
  const [bestData, setBestData] = useState([])
  

  //신작 소설
  const [newData, setNewData] = useState([])
 

  useEffect(() => {
    const ChapterList = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/novels`, {
          params: {
            isBest: true,
            size: 4
          }
        });
        console.log(response.data);
        setBestData(response.data.dtoList); // 수정: response.data로 변경
      } catch (error) {
        console.log(error);
      }
    };
    ChapterList();
  }, []);

  useEffect(() => {
    const ChapterList2 = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/novels`, {
          params: {
            isBest: false,
            size: 4
          }
        });
        console.log(response.data);
        setNewData(response.data.dtoList); // 수정: response.data로 변경
      } catch (error) {
        console.log(error);
      }
    };
    ChapterList2();
  }, []);

  const handleTitleClick = async(novelId) => {
    console.log(novelId)
      navigate(`/detail/${novelId}`)
    
   
  }
  
  
  return (
    <div className="productTabs">
    <Container>
      <Tabs
        defaultActiveKey="best"             
        id="my-tabs"        
      >
        <Tab eventKey="best" title="베스트 소설">
          <TabContent>
        <Row>
        <BestCards bestData={bestData} onClick={handleTitleClick} />
        </Row>
          </TabContent>
        </Tab>        
      </Tabs>
      <br/><br/>
      <Tabs
        defaultActiveKey="latest"             
        id="my-tabs"        
      >
      <Tab eventKey="latest" title="신작 소설">
          <TabContent>
          <Row>
           <NewCard newData={newData} onClick={handleTitleClick}/>
          </Row>          
          </TabContent>
        </Tab>
        </Tabs>
        <br/><br/>
      </Container>
    </div>
  );
}

export default CardTabs;