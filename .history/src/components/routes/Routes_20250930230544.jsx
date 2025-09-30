import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
// import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute from "./ProtectRoute";
import { mainContext } from "../context/MainContext";
import SignUp from "../pages/SignUp";

function Routes() {
  const { state } = useContext(mainContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: state.userInfo ? <Navigate to="/" replace={true} /> : <Login />,
    },
    {
      path: "/signup",
      element: state.isAuth ? <Navigate to="/" replace={true} /> : <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
