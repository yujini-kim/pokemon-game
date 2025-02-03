"use client";

import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_TcRsEX-x0rrKazrbmRffI-xpal2bMWM",
  authDomain: "jinijinionline-pokemon.firebaseapp.com",
  projectId: "jinijinionline-pokemon",
  storageBucket: "jinijinionline-pokemon.firebasestorage.app",
  messagingSenderId: "622355097523",
  appId: "1:622355097523:web:6f7c128fdbf5f7e6bc4dc6",
  measurementId: "G-7QYBVL1Y6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const auth = getAuth();
  // 회원가입
  const signupClick = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        console.log("회원가입성공", userCredential.user);
        alert("회원가입이 완료되었습니다");
      })
      .catch((error) => {
        console.log("회원가입실패", error.message);
        alert(error.message);
      });
  };

  const signinClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        console.log("로그인성공", userCredential.user);
        alert("로그인 성공");
      })
      .catch((error) => {
        console.log("로그인실패", error.message);
        alert(error.message);
      });
  };

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="mt-32 relative h-[580px] w-[400px] mx-auto rounded-lg overflow-hidden top-0 bottom-0 left-0 right-0">
      {/* 로그인 */}
      <div
        className={`absolute inset-0 transition-transform ease-in-out duration-500 ${
          isSignUp ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <form
          onSubmit={signinClick}
          className="bg-white border border-black p-8 flex flex-col"
        >
          <div className="flex justify-center">
            <img src="/img/singIcon.webp" className="size-48" />
          </div>

          <div className="relative mb-5">
            <img
              src="/img/icon_mail.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="SignInput"
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_password.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="SignInput"
              value={passwordValue}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="SignButton">
            Sign In
          </button>
        </form>
        <a
          href="#"
          onClick={toggleForm}
          className="SingTogglebtn border border-black border-t-0"
        >
          sign up
        </a>
      </div>

      {/* 회원가입 */}
      <div
        className={`absolute inset-0 transition-transform ease-in-out duration-500  ${
          !isSignUp ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a
          href="#"
          onClick={toggleForm}
          className="SingTogglebtn border border-black border-b-0"
        >
          sign in
        </a>
        <form
          onSubmit={signupClick}
          className="bg-white border border-black p-8"
        >
          <div className="flex justify-center">
            <img src="/img/singIcon.webp" className="size-48" />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_name.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input type="text" placeholder="Username" className="SignInput" />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_mail.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="SignInput"
              onChange={handleEmailChange}
              value={emailValue}
            />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_password.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="SignInput"
              onChange={handlePasswordChange}
              value={passwordValue}
            />
          </div>

          <button type="submit" className="SignButton">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
