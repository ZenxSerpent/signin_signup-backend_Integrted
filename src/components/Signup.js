import React from 'react'
import {Link,Navigate, useNavigate} from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
export default function Signup() {
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
const onsubmit=async (e)=>{
  e.preventDefault()
  console.log(username,email,password)
  // fetch('http://localhost:3000/signup', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({uname:username,eml:email,pword:password})
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error))
  let response= await axios.post('http://localhost:5000/signup',{uname:username,eml:email,pword:password})
  localStorage.setItem("users",JSON.stringify({uname:username,eml:email,pword:password}))
  navigate('/')

}
  return (
    <div>
       <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account? <Link to='/signin'>Sign In</Link></span>
        </div>
        <div className="form">
        <form onSubmit={onsubmit} >
          <input type="text" name="username" id="username" placeholder="UserName" onChange={(e)=>{setusername(e.target.value)}} />
          <input type="email" name="email" placeholder="Email" id="email" onChange={(e)=>{setemail(e.target.value)}} />
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e)=>{setpassword(e.target.value)}} />
          <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
            <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
        </div>
      </div>
    </div>
    </div>
  )
}
