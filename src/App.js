import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Main from './components/Main';
import Login from './components/Login';
import UserJoin from './components/UserJoin';
import ImageCreate from './components/ImageCreate'




function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Start/>}></Route>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/join' element={<UserJoin/>}></Route>
      <Route path='/imagecreate' element={<ImageCreate/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
