import React ,{useState,useEffect}from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"
function LoginPage({history}) {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
 const dispatch = useDispatch()

 const userLogin = useSelector((state) => state.userLogin)
 const { loading, error, userInfo } = userLogin
// const redirect = location.search ? location.search.split("=")[1] : "/"
useEffect(() => {
  if (userInfo) {
    history.push('/')
  }
}, [history, userInfo])

const submitHandler = (e) => {
  e.preventDefault()
  dispatch(login(email, password))
}
  return (
    <div className='login_container'>
      {error&&<h6 style={{color:"red"}}>{error}</h6>}
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        {/* <label htmlFor='user'>
          Email
          </label> */}
          <input
            id='user'
            type='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
        {/* <label htmlFor='password'>Password</label> */}
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />
          <button>Login</button>
      </form>
      <h4>New User?<Link to="/register">Sign Up</Link></h4>
    </div>
  )
}

export default LoginPage
