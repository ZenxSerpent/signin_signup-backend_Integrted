import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Signin() {
  const [email,setenmail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  const onlogin= async(e)=>{
      e.preventDefault()
      let response=await axios.post('http://localhost:5000/signin',{eml:email,pword:password})
      console.log(response)
      if (response.data.eml){
        localStorage.setItem('users',JSON.stringify({eml:email,pword:password}))
        navigate('/')
        
      }else{
        alert('enter correct details')
      }
  }
  return (
    <div>
        <div>
       <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Welcome...</h1>
          <span>Please enter your creds</span>
        </div>
        <div className="form">
        <form onSubmit={onlogin}>
          <input type="email" name="email" placeholder="Email" id="email" onChange={(e)=>setenmail(e.target.value)} />
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e)=>setpassword(e.target.value)} />
          <button>Log in</button>
          </form>
        </div>
        <div className="card_terms">
            <span>New to the App...<Link to='/signup'>Signup</Link></span>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
