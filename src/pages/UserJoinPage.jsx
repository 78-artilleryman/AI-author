import React, { useState, useEffect } from "react";
import styles from "../style/UserJoin.css";

function UserJoin() {

  //회원 가입정보
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");

  //유효성 검사 t/f 여부
  const [isuserId, setIsUserId] = useState(false);
  const [isuserPw, setIsUserPw] = useState(false);
  const [isuserPhone, setIsUserPhone] = useState(false);
  const [isuserName, setIsUserName] = useState(false);

  //유효성 검사 후 보여질 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  // 가입버튼 활성화 여부
  const [buttonUsed, setButtonUsed] = useState(false);

  const [userJson, setUserJson] = useState({
    id: null,
    password: null,
    userName: null,
    tel: null,
  })

  // 유저정보를 전부 옳바르게 입력했는지 확인 후 가입버튼 활성화
  useEffect(() => {
    if(isuserId && isuserPw && isuserPhone && isuserName){
      setButtonUsed(true)
    }
    else{
      setButtonUsed(false)
    }
  },[isuserId, isuserPw , isuserPhone , isuserName])

  const dataPush = () =>{

    //서버로 값 보내는 메서드
    setUserJson({
      id: userId,
      password: userPw,
      userName: userName,
      tel: userPhone,
    })

    const option = {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userJson)
    }

    const respons = fetch("", option)
    .then(response => {
      console.log(response);
    })

  }


  // 유저정보 입력 후 유효성 검사 및 유저정보 저장
  const onChangeId = (e) =>{

    const id = e.target.value;
    const effectivenessId = /^[a-z0-9_-]{5,20}$/;

    if(!effectivenessId.test(id)){
      setIdMessage("아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.")
      setIsUserId(false)
    }else{
      setUserId(id);
      setIdMessage("")
      setIsUserId(true)
    }


  };


  const onChangePw = (e) =>{
    
    const pw = e.target.value;
    const effectivenessPW =  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if(!effectivenessPW.test(pw)){
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsUserPw(false)
    }
    else{
      setUserPw(pw);
      setPwMessage("적합한 비밀번호 입니다.");
      setIsUserPw(true)
    }
  };

  const onChangeName = (e) =>{
    const name = e.target.value;
     const effectivenessName =  /[가-힣]/;

     if(name.length < 2 && name.length > 5 && !effectivenessName.test(name)){
      setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!")
      setIsUserName(false);
     }
     else{
      setUserName(name);
      setNameMessage("")
      setIsUserName(true);
     }
  };

  const onChangePhone = (e) =>{
    const phone = e.target.value;
    const effectivenessPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if(!effectivenessPhone.test(phone)){
      setPhoneMessage("010-xxxx-xxxx 형식으로 입력해 주세요");
      setIsUserPhone(false);
    }
    else{
      setUserPhone(phone);
      setPhoneMessage("올바른 형식입니다.");
      setIsUserPhone(true);
    }
  };


  return(
    <div className="body">
      <h1>회원가입</h1>
      <form onSubmit={dataPush}>
        <div className="input-area">
          <input type="text" id="id" placeholder="ID" onChange={onChangeId}/>
          <p>{idMessage}</p>
        </div>
        <div className="input-area">
          <input type="password" id="passwd" placeholder="PW"  onChange={onChangePw}/>
          <p>{pwMessage}</p>
        </div>
        <div className="input-area"> 
          <input type="text" id="name" placeholder="이름" maxLength="5" onChange={onChangeName}/>
          <p>{nameMessage}</p>
        </div>
        <div className="input-area">
          <input type="tel" id="tel" placeholder="휴대폰 번호" maxLength="16"  onChange={onChangePhone}/>
          <p>{phoneMessage}</p>
        </div>
        <button type="submit" disabled={buttonUsed}>가입하기</button>
      </form>
    </div>
  );
}
export default UserJoin;