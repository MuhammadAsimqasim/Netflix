import React, { useRef } from 'react';
import "./Regester.css";
import "./Loginscreen.css";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';
import { signUpSchema } from '../scheema';
import { login } from '../features/userSlice';

const  initialValues = {
  name : "",
  email : "",
  Password : "",
  Confirm_Password : "",
}







function Regester() {
  
  const navigate = useNavigate();

const dispatch = useDispatch()

  const { values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit : (values) => {
      // console.log(values);
      register(values)

    },
  });



  console.log(errors);

  const hostory =  useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    const register = (payload) => {
      // e.preventDefault();
  
      auth.createUserWithEmailAndPassword(
        payload?.email,
        payload?.Password,
      )
      .then((authUser) => {
        console.log(authUser)
        dispatch(login(authUser))
        navigate('/')
      })
        .catch((error) =>{
          alert(error.message);
        });
  
    };
  return (
    <Formik 
    onSubmit={handleSubmit}
    validateOnChange={true}>
    <div className="regester">
            <div className="loginscreen_background">
            <img className='regesterscreen_logo' 
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <button
        className='regesterscreen_button'>Sign In</button>

        <div className="regesterscreen_gradient">
        </div>
    <div className='regesterscreen'>

    <Form    onSubmit={handleSubmit}
    validateOnChange={true}>
        <h1>Sign up</h1>
        <input
         placeholder="Name"
         type="name"
         name="name" 
         autoComplete="off"
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
           />
           { errors.name && touched.name  ? ( <p>{errors.name}</p> ) : null} 
          
        <input 
        ref={emailRef} 
        placeholder="Email"
        type="email" 
        name="email" 
        autoComplete="off"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         { errors.email && touched.email  ? ( <p>{errors.email}</p> ) : null} 
        <input
         ref={passwordRef} 
         placeholder="Password" 
         type="Password" 
         name="Password" 
         autoComplete="off" 
         value={values.Password}
         onChange={handleChange}
         onBlur={handleBlur}
         />
         { errors.Password && touched.Password  ? ( <p>{errors.Password}</p> ) : null} 
        <input 
        placeholder="Confirm Password" 
        type="Password" 
        name="Confirm_Password" 
        autoComplete="off"
        value={values.Confirm_Password}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        { errors.Confirm_Password && touched.Confirm_Password  ? ( <p>{errors.Confirm_Password}</p> ) : null} 

        {/* <button type='submit' onClick={register}>Sign Up</button> */}
        <button type='submit' onClick={handleSubmit}>Sign Up</button>
        <h4><span className='regesterscreen_gray'>Already have an account? </span>
        <span className='signupscreen_link' onClick={() => hostory("/")}>Login</span>
        </h4>
    </Form>
    </div>
  </div>
  </div>
  </Formik>
  );

}

export default Regester
