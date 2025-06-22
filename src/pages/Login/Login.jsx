import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  return (
      <>
        <div className='login-pattern' />
        <div className='login'>
          <img className="login-logo" src="./logo.png" alt="title" />
          <div className='form'>
            <h1>{signState}</h1>
            <form>
              {
                signState === 'Sign Up' ?
                    <input type='text' placeholder='Your Name' /> :
                    <></>
              }
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button onClick={goHome}>{signState}</button>
              <div className='help'>
                <div className='remember'>
                  <input type='checkbox' />
                  <label>Stay Signed In</label>
                </div>
                <p>Need Help?</p>
              </div>
            </form>
            <div className='switch'>
              {
                signState === 'Sign In' ?
                    <p>New to FakeFlix? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p> :
                    <p>Already have account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Login