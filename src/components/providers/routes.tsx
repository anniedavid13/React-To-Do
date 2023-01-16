import React from "react";
import App from "../../App";
import {
    createBrowserRouter,
    RouterProvider, Route 
  } from "react-router-dom";
import { HomePage } from "../home-page";
import { LoginPage } from "../login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ],
  },
]);

export const AppRouterProvider = ()=> {
    return <RouterProvider router={router}/> }