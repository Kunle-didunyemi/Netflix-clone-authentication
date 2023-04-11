import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import SignInScreen from "./SignInScreen";

const SignupSreen = () => {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword( 
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div >
      {signUp ? (
        <SignInScreen/>
      ): (
        <div className="signupScreen">
          <form>
        <h1>Sign up</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={register} type="submit">
          Sign Up
        </button>

        <h4>
          <span className="signupScreen_gray">Already have an account? </span>{" "}
          <span onClick={()=> setSignUp(true)} className="signupScreen_link">
            {" "}
            Sign In.
          </span>
        </h4>
      </form>
        </div>
        
      )}
      
    </div>
  );
};

export default SignupSreen;
