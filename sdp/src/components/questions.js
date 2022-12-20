import './questions.css'
import { NavLink } from 'react-router-dom'
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'



const Form = () => {

  const history = useHistory()
  
  

  const [user, setUser] = useState({
    email : '',
    password : ''
  });

  // Handle Input
  const handleChange = (event) =>{
    let name = event.target.name
    let value = event.target.value

    setUser({...user, [name]:value})
  }

  // Handle Login
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const {email, password} = user;
    try {
      const res = await fetch('/login', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email, password
        })
      });

      if(res.status === 400 || !res){
        window.alert("Invalid Credentials")
      }else{
        window.alert("Login Successfull");
        window.location.reload();
        history.push('/')
        // Token is generated When we Logged In.
        // Now we need to create Schema for Messages
      }

    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email</label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password</label>
                <input class="fa fa-eye showpwd" onClick="showPwd ('password', this)"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={user.password}
                onChange={handleChange}
                />
                <NavLink to='/forgot' className="form-check-label" htmlFor="exampleCheck1">
                  Forgot Password?
                </NavLink>
              
                <NavLink to="/" className='btn'>Register Exam</NavLink>
                
            </form>
        </div>
    )
}

export default Form
