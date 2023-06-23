import React, {useState, useContext} from 'react'
import ChapterList from '../components/ChapterList'
import styles from '../style/ChapterListPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import CoverModals from "../components/CoverMdals";
import { NovelContext } from '../context/NovelContext';


const ChapterListPage = () => {    
    const { novelId } = useContext(NovelContext);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const selectedImage = location.state?.selectedImage;
    const prompt = location.state?.prompt;

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSelectImg = () => {
        setShowModal(true);
    };

    return (
        <div className={styles.section}>            
        <Container>              
        <Row>
            <Col>
                <div className={styles.imgContainer}>                        
                    <div className={styles.img2}>
                            <img src="img/bookImg.png" alt="책 표지" />
                    </div>
                </div>
            </Col>
            <Col>
                <div className={styles.chapter}>
                    <ChapterList prompt={prompt} />
                </div><br/>
                <div className={styles.button}>
                    <Button variant="outline-info" onClick={handleSelectImg}>출판 하기</Button>
                </div>
                <CoverModals novelId={novelId}  show={showModal} handleClose={handleCloseModal} />
            </Col>
        </Row>      
        </Container> <br/><br/><br/><br/><br/>
        </div>
    )
}

export default ChapterListPage