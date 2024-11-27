import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Randomtest from './pages/randomtesting.js';
import InstructionPg from './pages/Instruction.js';
import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReviewPg from './pages/review.js';
import LoginPg from './pages/login.js';
import AboutPg from './pages/about.js';

// Router is for proper functioning of links/paths in the navigation bar

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <AboutPg/>,
  },
  {
    path: "instruction",
    element: <InstructionPg/>,
  },
  {
    path: "review",
    element: <ReviewPg/>,
  },
  {
    path: "randomtesting",
    element: <Randomtest/>,
  },
  {
    path: "login",
    element: <LoginPg/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
