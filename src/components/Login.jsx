import {useState, React} from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { HiLockClosed } from 'react-icons/hi'
import { ErrorMessage } from '@hookform/error-message';

import { loginUser } from '../api/Users';
import { setRefreshToken } from '../storage/Cookie';
import { SET_TOKEN } from '../store/Auth';


function Login() {
  // 1. 로그인시 서버측에 토큰 요청
  // 2. 만약에 맞다면 메인 페이지로 이동
  // 3. 만약에 틀리면 입력창 밑에 메세지 출력 
  // 4. 

  //입력한 유저정보
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onChange1 = (e)=>{
    setUserId(e.target.value)
  }
  const onChange2 = (e)=>{
    setUserId(e.target.value)
  }

  //오류 메세지
  const [loginMessage, setLoginMessage] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch();

   // useForm 사용을 위한 선언
   const { register, setValue, formState: { errors }, handleSubmit } = useForm();

 // submit 이후 동작할 코드
    // 백으로 유저 정보 전달
    const onValid = async ({ username, password }) => {
      // input 태그 값 비워주는 코드
      setValue("password", "");
      
      // 백으로부터 받은 응답
      const response = await loginUser({ username, password });

      if (response.status) {
          // 쿠키에 Refresh Token, store에 Access Token 저장
          setRefreshToken(response.json.refresh_token);
          dispatch(SET_TOKEN(response.json.access_token));
         
          return navigate("/");
      } else {
          console.log(response.json);
      }
  };


  return(
    <div className="body">
    <h1>로그인</h1>
    <form onSubmit={onValid}>
      <div>
        <div>
          <label htmlFor="id"></label>
          <input type="text" id="id" placeholder="id" onChange={onChange1} ></input>
        </div>
      <div>
        <label htmlFor="passwd"></label>
        <input type="password" id="passwd" placeholder="passwd"  onChange={onChange2}></input>
      </div>
      <p></p>
      <button type="submit">로그인</button>
      <Link to="/join">회원가입</Link>
      </div>
    </form>
  </div>
  );
}
export default Login;