import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../styles/login.css"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

function RegisterPage({location,history}) {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const dispatch = useDispatch()

const userRegister = useSelector((state) => state.userRegister)
const { loading, error, userInfo } = userRegister

const redirect = location.search ? location.search.split("=")[1] : "/"

useEffect(() => {
  if (userInfo) {
    history.push(redirect)
  }
}, [history, userInfo, redirect])

const submitHandler = (e) => {
  e.preventDefault()
  if (password !== confirmPassword) {
    alert("Passwords do not match")
  } else {
    dispatch(register(name, email, password))
  }
}

return (
  <div className="login_container">
    <h1>Sign Up</h1>
    <form onSubmit={submitHandler}>
      {/* <Form.Group controlId='name'> */}
        <label>Name</label>
        <input
          type='name'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
       
        <label>Email Address</label>
        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      

      {/* <Form.Group controlId='confirmPassword'> */}
        <label>Confirm Password</label>
        <input
          type='password'
          placeholder='Confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

      <button type='submit' variant='primary'>
        Register
      </button>
    </form>

    {/* <Row className='py-3'> */}
      {/* <col> */}
        Have an Account?{" "}
        <a href={redirect ? `/login?redirect=${redirect}` : "/login"}>
          Login
        </a>
      {/* </col> */}
    {/* </Row> */}
  </div>
)
}

export default RegisterPage
