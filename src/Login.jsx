import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {ApiCall} from "../Services/ApiCall"
import { Login_url } from '../Services/Base_URL'


function Login() {
    let navigate= useNavigate();
    const[logindata,setLoginData]=useState([])
  
    const Login_user = async (e) => {
      e.preventDefault();
      try {
        let response = await ApiCall('post', Login_url, logindata);
        if (response.status === 200) {
          window.localStorage.setItem("user",true)
         
          return navigate("/home")
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (

 <div>
 

 
 
  <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up" /></a>
 
  <section className="log-reg">
    <div className="top-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-7">
            <div className="logo">
              <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div class="image image-log"/>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header inloginp">
              <h2 className="title">Welcome to Ollya</h2>
            </div>
            <div className="main-content inloginp">
              <form action="#">
                <div className="form-group">
                  <label>User Name</label>
                  <input type="email" className="my-form-control" placeholder="Enter Your Email"
                  
                  value={logindata?.name}
                onChange={(e) => setLoginData({ ...logindata, username: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Password"
                  value={logindata?.password}
                  onChange={(e) => setLoginData({ ...logindata, password: e.target.value })} />
                </div>
                <div className="text-center">
                  <button type="submit" className="default-btn" onClick={(e)=>Login_user(e)}><span>Sign IN</span></button>
                </div>
                <div className="or">
                  <p>OR</p>
                </div>
                <div className="or-content">
                  <p className="or-signup"    > Don't have an account? <a   onClick={() => {
                                          return navigate(
                                            `/register`
                                          );
                                        }}>Sign up here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Login