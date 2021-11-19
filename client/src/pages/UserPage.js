import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, updateUserProfile,logout } from "../actions/userActions"

function UserPage({ history }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)
const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile
const submitHandler = (e) => {
  e.preventDefault()
  if (password !== confirmPassword) {
    alert("Passwords do not match")
  } else {
    dispatch(updateUserProfile({ id: user._id, name, email, password }))
  }
}

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: "USER_UPDATE_PROFILE_RESET" })
        dispatch(getUserDetails("profile"))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  return (
    <div>
      <div >
        <button className='logout_button'onClick={()=>dispatch(logout())}>Logout</button>
        <h2>User Profile</h2>

        {!edit ? (
          <form>
            <button onClick={() => setEdit(true)}>Edit</button>
            <h2>Hii {name}</h2>
            <p>Your Email is "{email}"</p>
          </form>
        ) : (
          <form onSubmit={submitHandler}>
            <button onClick={() => setEdit(false)}>Back</button>

            {/* <Form.Group controlId='name'> */}
            <label>Name</label>
            <input
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            {/* <Form.Group controlId='email'> */}
            <label>Email Address</label>
            <input
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {/* </Form.Group> */}

            {/* <Form.Group controlId='password'> */}
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
            {/* </Form.Group> */}

            <button type='submit' variant='primary'>
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default UserPage
