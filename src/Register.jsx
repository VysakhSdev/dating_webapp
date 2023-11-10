import React, { useState } from 'react'
import { User } from '../Services/Base_URL';
import { ApiCall } from '../Services/ApiCall';
import { useNavigate } from 'react-router-dom';


function Register() {
  let navigate= useNavigate();
  const [registerUser,setRegisterUser]=useState([]);
  console.log("registerUser",registerUser)


  const user_register = async (e) => {
    e.preventDefault();
    try {
      let response = await ApiCall('post', User, registerUser);
      console.log("THE RESPONSE IS" , response)
      if (response?.status===200) {
        console.log(response.data, "daaaaaaaa");
        console.log("ooooooooooooooooooooooook")
       return navigate("/home")
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (


<div>
  {/* preloader start here */}
  {/* <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div> */}
  {/* preloader ending here */}
  {/* scrollToTop start here */}
  <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up" /></a>
  {/* scrollToTop ending here */}
  {/* ================> login section start here <================== */}
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
        <div className="image">
        </div>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header">
              <h2 className="title">Welcome to Ollya </h2>
              <p>Let's create your profile! Just fill in the fields below, and we’ll get a new account. </p>
            </div>
            <div className="main-content">
              <form action="#">
                <h4 className="content-title">Acount Details</h4>
                <div className="form-group">
                  <label>Username*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Usewrname"
                  value={registerUser?.username}
                  onChange={(e) => setRegisterUser({ ...registerUser, username: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Email Address*</label>
                  <input type="email" className="my-form-control" placeholder="Enter Your Email"
                   value={registerUser?.email}
                   onChange={(e) => setRegisterUser({ ...registerUser, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Password"
                   value={registerUser?.password}
                   onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })} 
                  />
                </div>
                
                <h4 className="content-title mt-5">Profile Details</h4>
                <div className="form-group">
                  <label>Name*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Full Name" 
                    value={registerUser?.name}
                    onChange={(e) => setRegisterUser({ ...registerUser, name: e.target.value })}/>
                </div>
                <div className="form-group">
                  <label>Age*</label>
                  <input type="number" className="my-form-control"
                  value={registerUser?.age}
                  onChange={(e) => setRegisterUser({ ...registerUser, age: e.target.value })} 
                  
                  />
                </div>
                <div className="form-group">
                  <label>I am a*</label>
                  <div className="banner__inputlist">
                    <div className="s-input me-3">
                      <input type="radio" name="gender1" id="males1" value="male"
                  onChange={(e) => setRegisterUser({ ...registerUser, you_are: e.target.value })} 
                  /><label htmlFor="males1" >Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender1" id="females1" value="female"
                    onChange={(e) => setRegisterUser({ ...registerUser, you_are: e.target.value })} /><label htmlFor="females1">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Looking for a*</label>
                  <div className="banner__inputlist">
                    <div className="s-input me-3">
                      <input type="radio" name="gender2" id="males" value="male"
                    onChange={(e) => setRegisterUser({ ...registerUser, looking_for: e.target.value })} /><label htmlFor="males">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender2" id="females" value="female"
                    onChange={(e) => setRegisterUser({ ...registerUser, looking_for: e.target.value })}/><label htmlFor="females">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mobile*</label>
                  <input type="Number" className="my-form-control" placeholder="Enter Your City" 
                  value={registerUser?.mobile}
                  onChange={(e) => setRegisterUser({ ...registerUser, mobile: e.target.value })} 
                  />
                </div>
                <div className="form-group">
                  <label>City*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your City" 
                   value={registerUser?.city}
                   onChange={(e) => setRegisterUser({ ...registerUser, city: e.target.value })} 
                  />
                </div>
                <button className="default-btn reverse" data-toggle="modal" data-target="#email-confirm" onClick={(e)=>user_register(e)}><span>Create Your Profile</span></button>
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

export default Register