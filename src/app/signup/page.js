"use client";

import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useRouter } from "next/navigation";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_LOGIN_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_LOGIN_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_LOGIN_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_LOGIN_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_LOGIN_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_LOGIN_MEASUREMENT_ID,
};
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
  const router = useRouter();
  const auth = getAuth();
  // 회원가입
  const signupClick = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        console.log("회원가입성공", userCredential.user);
        alert("회원가입이 완료되었습니다");
        router.push("/singup");
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
        router.push("/");
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
          className="bg-white shadow-md p-8 flex flex-col"
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
        <a href="#" onClick={toggleForm} className="SingTogglebtn border-t-0">
          sign up
        </a>
      </div>

      {/* 회원가입 */}
      <div
        className={`absolute inset-0 transition-transform ease-in-out duration-500  ${
          !isSignUp ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a href="#" onClick={toggleForm} className="SingTogglebtn border-b-0">
          sign in
        </a>
        <form onSubmit={signupClick} className="bg-white p-8">
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
