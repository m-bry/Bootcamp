import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handlePasswordChange = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form className = "form">
      <input type ="email" id="email" placeholder="Enter your email"/>
      <input type = {showPassword ? 'text' : 'password'}
       id="password" placeholder="Enter your password"/>
      
      <input
      type="checkbox"
      checked={showPassword}
      onChange={handlePasswordChange}>
      </input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
