import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/Modals.css";
import { Configuration, OpenAIApi } from "openai";

const Modals = ({ show, handleClose }) => {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");    
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const generateImages = async () => {        
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    setResults(res.data.data.map(item => item.url));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    handleClose();     
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>그림 선택하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>문장을 입력해주세요.</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPrompt(e.target.value)}              
              autoFocus
            />
          </Form.Group>
          <Form.Group>
          <Button variant="primary" onClick={generateImages}>
          완료
        </Button>
        </Form.Group>
          <Form.Group
            className="mb-3"            
          >
            <br />
        {results.length > 0 ? (
          <div>
            {results.map((result, index) => (
              <img
                key={index}
                className='resultImg'                
                src={result}
                alt={`결과 ${index}`}
                onClick={() => handleImageClick(result)}
              />
            ))}
            <br /><br />
            <div className='notion'>↑↑↑ 위의 그림 중에 하나를 클릭해주세요</div> 
            
          </div>
        ) : (
          <></>
        )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;