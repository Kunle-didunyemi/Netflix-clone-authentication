import React, { useState } from "react";
import "./LoginScreen.css";
import Netflix from "../avatarimage/netflix.png";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="login_logo" src={Netflix} alt="" />
        {signIn ? (
          <button
            className="loginScreen_button"
            onClick={() => {
              setSignIn(false);
            }}
          >
            Back
          </button>
        ) : (
          <button
            className="loginScreen_button"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Get started
          </button>
        )}

        <div className="loginScreen_gradient"></div>
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className=" loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
