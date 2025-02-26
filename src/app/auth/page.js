"use client";

import { useState } from "react";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false); //토글버튼
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // 회원가입
  const signUpSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") return;
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      }); //프로필업데이트
      router.push("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  //로그인
  const signInSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); //홈페이지로 이동
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
      //setError
    } finally {
      setIsLoading(false);
    }
  };

  const githubBtn = async (e) => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const googleBtn = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (e) {
      kingyujin;
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="mt-20 tablet:mt-32 relative w-80 h-[460px] tablet:h-[580px] tablet:w-[400px] mx-auto rounded-lg overflow-hidden top-0 bottom-0 left-0 right-0">
      {/* 로그인 */}
      <div
        className={`absolute inset-0 transition-transform ease-in-out duration-500 ${
          isSignUp ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <form
          onSubmit={signInSubmit}
          className="bg-white shadow-md p-8 flex flex-col"
        >
          <div className="flex justify-center">
            <img src="/img/singIcon.webp" className="size-32 tablet:size-48" />
          </div>

          <div className="relative mb-5">
            <img
              src="/img/icon_mail.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="SignInput"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_password.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="SignInput"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button type="submit" className="SignButton">
              {isLoading ? "Loading..." : "로그인"}
            </button>
            <div className="flex flex-row gap-8 mt-6">
              <button type="button" onClick={githubBtn}>
                <img src="/img/icon_git.webp" className="size-8" />
              </button>
              <button type="button" onClick={googleBtn}>
                <img src="/img/icon_google.webp" className="size-8" />
              </button>
            </div>
            {error !== "" ? (
              <span className="text-sm text-center text-red-500">{error}</span>
            ) : null}
          </div>
        </form>
        <a href="#" onClick={toggleForm} className="SingTogglebtn">
          회원가입하기!!
        </a>
      </div>

      {/* 회원가입 */}
      <div
        className={`absolute inset-0 transition-transform ease-in-out duration-500  ${
          !isSignUp ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a href="#" onClick={toggleForm} className="SingTogglebtn border-b-0">
          로그인하기
        </a>
        <form onSubmit={signUpSubmit} className="bg-white p-8">
          <div className="flex justify-center">
            <img src="/img/singIcon.webp" className="size-32 tablet:size-48" />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_name.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              name="name"
              onChange={onChange}
              value={name}
              type="text"
              placeholder="Username"
              className="SignInput"
            />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_mail.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="SignInput"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="relative mb-5">
            <img
              src="/img/icon_password.webp"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 size-4"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="SignInput"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button type="submit" className="SignButton">
              {isLoading ? "Loading..." : "회원가입"}
            </button>
            {error !== "" ? (
              <span className="text-sm text-center text-red-500">{error}</span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
