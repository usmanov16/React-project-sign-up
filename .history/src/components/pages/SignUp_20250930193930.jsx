import React, { useContext } from "react";
import { mainContext } from "../context/MainContext";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

function SignUp() {
  const { t } = useTranslation();
  //   const { dispatch } = useContext(mainContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    dispatch({ type: "LOGIN", payload: data });

    e.target.reset();
  };

  const googleSignUp = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className="w-full h-full grow flex-col flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-6 shadow-2xl rounded-2xl py-8 px-8">
        <h2 className="text-3xl text-center font-bold">
          {t("ro'yhatdan o'tish")}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              className="input w-full"
              type="text"
              name="fullname"
              placeholder="Fullname"
              required
              autoComplete="off"
            />
            <input
              className="input w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              className="input w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
            <input
              className="input w-full"
              type="password"
              name="password-again"
              placeholder="Password Again "
              required
              autoComplete="off"
            />
          </div>
          <button
            onClick={googleSignUp}
            type="submit"
            className="btn btn-neutral"
          >
            <FcGoogle />
            <span>Google</span>
          </button>
          <button type="submit" className="btn btn-primary">
            {t("kirish")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
