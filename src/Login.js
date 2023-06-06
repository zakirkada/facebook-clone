import React from 'react';
import firebase from "./firebase"
import './Login.css';
import Button from '@mui/material/Button';
import { provider } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const auth = getAuth();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png'
          alt=''
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
