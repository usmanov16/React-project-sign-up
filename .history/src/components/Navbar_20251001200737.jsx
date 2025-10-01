// import React, { useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { Link, Navigate } from "react-router-dom";
// // import { mainContext } from "../context/MainContext";
// import { mainContext } from "./context/MainContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";

// const languages = [
//   {
//     id: 1,
//     icon: "/uzbekistan-flag.png",
//     text: "uz",
//   },
//   {
//     id: 2,
//     icon: "/united-kingdom-flag.png",
//     text: "en",
//   },
//   {
//     id: 3,
//     icon: "/russia-flag.png",
//     text: "ru",
//   },
// ];

// function Navbar() {
//   const { state: {userInfo}, dispatch } = useContext(mainContext);
//   const { i18n } = useTranslation();

//   const logout = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     });
//     dispatch({ type: "LOGOUT" });
   
//   };
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="container flex justify-between items-center">
//         <Link to="/" className="btn btn-ghost text-xl">
//           FN42
//         </Link>

//         <div className="flex items-center gap-4">
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn m-1">
//               <img
//                 src={
//                   languages.find(
//                     (lang) => lang.text.toLowerCase() === i18n.language
//                   )?.icon
//                 }
//                 alt={i18n.language}
//                 width={24}
//                 height={24}
//               />
//               <span>{i18n.language.toUpperCase()}</span>
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
//             >
//               {languages.map((lang) => {
//                 return (
//                   <li key={lang.id}>
//                     <button onClick={() => i18n.changeLanguage(lang.text)}>
//                       <img
//                         src={lang.icon}
//                         alt={lang.text}
//                         width={24}
//                         height={24}
//                       />
//                       <span>{lang.text}</span>
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="flex-none">
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div className="w-10 rounded-full">
//                   <img
//                     alt="user Info"
//                     src={userInfo.photoURL}
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl"
//               >
//                 <li>
//                   <button className="justify-between">Profile</button>
//                 </li>
//                 <li>
//                   <button>Settings</button>
//                 </li>
//                 <li>
//                   <button onClick={logout}>Logout</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { mainContext } from "./context/MainContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const languages = [
  { id: 1, icon: "/uzbekistan-flag.png", text: "uz" },
  { id: 2, icon: "/united-kingdom-flag.png", text: "en" },
  { id: 3, icon: "/russia-flag.png", text: "ru" },
];

function Navbar() {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(mainContext);
  const { t, i18n } = useTranslation();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        toast.success(t("chiqishToast"))
      })
      .catch((error) => {
        toast.error(t)
      });
  };

  
  const currentLang = languages.find((lang) =>
    i18n.language.toLowerCase().startsWith(lang.text)
  );

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
                src={currentLang?.icon || "/default-flag.png"}
                alt={i18n.language}
                width={24}
                height={24}
              />
              <span>{i18n.language.toUpperCase()}</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-xl"
            >
              {languages.map((lang) => (
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
              ))}
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
                    alt="user avatar"
                    src={userInfo?.photoURL || "/default-avatar.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-xl"
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
