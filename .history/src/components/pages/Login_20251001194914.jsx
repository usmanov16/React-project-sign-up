import React, { useContext } from "react";
import { mainContext } from "../context/MainContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { dispatch } = useContext(mainContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    dispatch({ type: "LOGIN", payload: data });

    e.target.reset();
  };

  const hanndleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.message);
      });
  };

  return (
    <div className="w-full h-full grow flex-col flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-6 shadow-2xl rounded-2xl py-8 px-8">
        <h2 className="text-3xl text-center font-bold">LOGIN</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              className="input w-full"
              type="text"
              name="login"
              placeholder="Login"
              required
            />
            <input
              className="input w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            onClick={hanndleGoogleLogin}
            type="button"
            className="btn btn-neutral"
          >
            <FcGoogle />
            <span>Google</span>
          </button>
          <button type="submit" className="btn btn-primary">
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
