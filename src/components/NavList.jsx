import React from "react";
import Logo from "../images/logo.jpeg"
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/LoginPage";

function NavList(props) {


 
    return(
      <nav>
          <img src={Logo} alt=""></img>
          <div className="menu">
            <Link className="menu-link" to='/login'>로그인</Link>
            <Link className="menu-link" to='/join'>회원가입</Link>
       
          </div>
        </nav>
    )
  
}
export default NavList;