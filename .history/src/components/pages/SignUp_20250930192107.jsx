import React, { useContext } from "react";
import { mainContext } from "../context/MainContext";
import { useTranslation } from "react-i18next";

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
  return (
    <div className="w-full h-full grow flex-col flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-6 shadow-2xl rounded-2xl py-8 px-8">
        <h2 className="text-3xl text-center font-bold">{t("ro'yhatdan o'tish")}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
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
          </div>
          <button type="submit" className="btn btn-primary">
            
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
