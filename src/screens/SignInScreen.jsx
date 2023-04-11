import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import SignupSreen from "./SignupScreen";

const SignInScreen = () => {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);



  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
    {
      signUp ? (
        <SignupSreen/>
      ) : (
        <div className="signupScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>{" "}
          <span onClick={()=>setSignUp(true)} className="signupScreen_link">
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
      )
    }
    
    </>
  );
};

export default SignInScreen;
