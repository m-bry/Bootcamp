import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <Router>
    <div className='App'>
      <div className='container'>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}
export default App
