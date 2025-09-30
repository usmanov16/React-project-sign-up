import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { mainContext } from "../context/MainContext";
import { mainContext } from "./context/MainContext";

const languages = [
  {
    id: 1,
    icon: "/uzbekistan-flag.png",
    text: "uz",
  },
  {
    id: 2,
    icon: "/united-kingdom-flag.png",
    text: "en",
  },
  {
    id: 3,
    icon: "/russia-flag.png",
    text: "ru",
  },
];

function Navbar() {
  const { state: {userInfo}, dispatch } = useContext(mainContext);
  const { i18n } = useTranslation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container flex justify-between items-center">
        <Link to="/" className="btn btn-ghost text-xl">
          FN42
        </Link>

        <div className="flex items-center gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <img
                src={
                  languages.find(
                    (lang) => lang.text.toLowerCase() === i18n.language
                  )?.icon
                }
                alt={i18n.language}
                width={24}
                height={24}
              />
              <span>{i18n.language.toUpperCase()}</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
            >
              {languages.map((lang) => {
                return (
                  <li key={lang.id}>
                    <button onClick={() => i18n.changeLanguage(lang.text)}>
                      <img
                        src={lang.icon}
                        alt={lang.text}
                        width={24}
                        height={24}
                      />
                      <span>{lang.text}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="ages/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl"
              >
                <li>
                  <button className="justify-between">Profile</button>
                </li>
                <li>
                  <button>Settings</button>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
