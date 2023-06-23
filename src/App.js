import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import Main from './pages/Main';
import Login from './pages/LoginPage';
import UserJoin from './pages/UserJoinPage'
import ImageCreate from './components/ImageCreate'
import BookListPage from './pages/BookListPage';
import WriteChapter from './pages/WriteChapter';
import InsertNovelData from './pages/InsertNovelData';
import ChapterListPage from './pages/ChapterListPage';
import restProVider from 'ra-data-simple-rest'
import Logout from './pages/LogoutPage';
import MyNovels from './pages/MyNovels';
import NavBarElements from './components/NavBarElements';
import { NovelProvider } from './context/NovelContext';
import DetailPage from './pages/DetailPage';
import BookViewPage from './pages/BookViewPage';

const dataProvider = restProVider('http://localhost:8080');


function App() {
  return (
    <Router>
    <NovelProvider>
      <NavBarElements />      
        <Routes>            
          <Route path='/' element={<Start/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<UserJoin/>}></Route>
          <Route path='/imagecreate' element={<ImageCreate/>}></Route>
          <Route path = "/bookList" element = { <BookListPage /> } />        
          <Route path = "/chapterListPage" element = { <ChapterListPage /> } />        
          <Route path = "/insertNovelData" element = { <InsertNovelData/> } />
          <Route path = "/writeChapter" element = { <WriteChapter /> } />            
          <Route path = "/myNovels" element = { <MyNovels />} />
          <Route path='/detail' element={<DetailPage/>}></Route>
          <Route path="/detail/:novelId" element={<DetailPage />} />
          <Route path='/bookview' element={<BookViewPage/>}/>
          <Route path='/bookview/:chapterId' element={<BookViewPage/>}/>
        </Routes>          
      </NovelProvider>
    </Router>
  );
}

export default App;
