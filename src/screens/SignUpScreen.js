import React, { useRef } from 'react';
import "./SignupScreen.css";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
  const hostory = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const register = (e) => {
  //   e.preventDefault();

  //   auth.createUserWithEmailAndPassword(
  //     emailRef.current.value,
  //     passwordRef.current.value
  //   )
  //   .then((authUser) => {
  //     console.log(authUser)
  //   })
  //     .catch((error) =>{
  //       alert(error.message);
  //     });

  // };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => alert(error.message));
  };

  return <div className='signupscreen'>
    <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email ' type="email" />
        <input ref={passwordRef} placeholder='Password' type="Password" />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='signupscreen_gray'>New to Netflix? </span>
        <span className='signupscreen_link' onClick={() => hostory("/reg")}>Sign Up Now</span>
        {/* <span className='signupscreen_link' onClick={signIn}>Sign Up Now</span> */}
        </h4>
    </form>
  </div>;
}

export default SignUpScreen
