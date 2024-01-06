import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,

} from "react-router-dom";
import Banner from './Banner';
import Loginscreen from './screens/Loginscreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Regester from './screens/Regester';

function App() {


  const navi = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe =  auth.onAuthStateChanged (userAuth => {
      if(userAuth){
        //logged In
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout())
        navi('/')

      }
    });

    return unsubscribe;
  }, [dispatch]);



  return (
    <div className="app">    

   {!user ? (
    <Routes>
      <Route path='/' exact index element={<Loginscreen />} />    
        <Route path='/reg' element={<Regester />} />
    </Routes>
    // <Loginscreen />
   ):(
    <Routes>
    <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/'  index element={<HomeScreen />} />
    </Routes>
   )}

    </div>
  );
}

export default App;
