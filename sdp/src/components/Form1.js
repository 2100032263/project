import React from 'react'
import './Form1Styles.css'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {useState} from 'react'

const Form = () => {

  const history = useHistory()

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
  });

  // Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {username, email, password} = user;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/register', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username, email, password
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Already Used Details")
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Registered Successfully");
        history.push('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit} method="POST">
                <label  htmlFor="name" className="form-label">
                  Username</label>
                <input 
                type="text"
                className="form-control"
                id="name"
                name="username"
                value={user.username}
                onChange={handleInput}
                 />
                <select>
                    <option>Client</option>
                    <option>Recruiter</option>
                </select>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email</label>
                <input 
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={user.email}
                onChange={handleInput}
                />
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password</label>
                <input class="fa fa-eye showpwd" onClick="showPwd ('passwd', this)"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={user.password}
                onChange={handleInput}
                />
                <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
                <NavLink to="/TRAINING" className="btn text-center">Register</NavLink>
            </form>
        </div>
    )
}

export default Form