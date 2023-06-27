import React from 'react'
import Signup from './components/Signup.js'
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom"
import Signin from './components/Signin.js'
import Landingpage from './components/Landingpage.js'
import { Navigate } from 'react-router-dom'
import Privatecomponent from './components/Privatecomponent.js'
import Priv1 from './components/Priv1.js'
import Priv2 from './components/Priv2.js'
import Priv3 from './components/Priv3.js'
require('./App.css')
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Privatecomponent/>}>
        <Route path='/priv1' element={<Priv1/>}></Route>
          <Route path='/priv2' element={<Priv2/>}></Route>
          <Route path='/priv3' element={<Priv3/>}></Route>
        </Route>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
