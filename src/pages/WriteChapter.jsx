import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../style/WriteChapter.module.css";
import Form from 'react-bootstrap/Form';
import Modals from '../components/Modals';
import axios from 'axios';

const WriteChapter = () => {
  
  const [ textValue, setTextValue ] = useState('');  
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCompleteWriting = () => {    
    const data = {
      text: textValue
    };    
    axios.post('http://localhost:8080/chapters/1', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
  };

  const handleSelectImg = () => {
    setShowModal(true);
  }

    return (        
          <div className={styles.writeForm}>            
              챕터제목 : <input placeholder='chapter...'></input><hr/>
            <textarea 
              className={styles.txtarea}
              placeholder="여기에 입력하세요"                     
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>          
            <hr />
            <div>            
                  <Button variant="outline-info" onClick={handleSelectImg}>그림 선택</Button>
                  <Button variant="outline-warning">임시 저장</Button>
                  <Button variant="outline-success" onClick={handleCompleteWriting}>글 작성 완료</Button>
            </div>
            <Modals show={showModal} handleClose={handleCloseModal} />          
          </div>
          
        
      );
    }

export default WriteChapter;