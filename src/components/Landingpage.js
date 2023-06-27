import React from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Landingpage() {
  let auth=localStorage.getItem('users')
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/')     //it rerenders the whole file
  }
  return (
    <div>
      <h1>landing page and pre signin accessable contents</h1>
      {auth?<Link onClick={logout} to='/signup'>logout</Link>:<Link to='/signup'>signup</Link>}
      <Link to='/priv1'>Privatecomponent1</Link>
      <Link to='/priv2'>Privatecomponent2</Link>
      <Link to='/priv3'>Privatecomponent3</Link>

    </div>
  )
}
