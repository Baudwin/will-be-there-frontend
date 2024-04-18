import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import {ErrorPage} from "./ErrorPage";
import {Home} from "./routes/Home";
import {LogIn} from "./routes/Login";
import {SignUp} from "./routes/SignUp";
import {CreateEvent} from "./routes/CreateEvent";
import {RSVP} from "./routes/RSVP";
import {Help} from "./routes/Help";
import {Profile} from "./routes/Profile";
import { Success } from "./routes/Success";
import { MyRsvps } from "./routes/MyRsvps";
import { MyEvents } from "./routes/MyEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "create-event",
        element: <CreateEvent />,
      },
      {
        path: "rsvp",
        element: <RSVP />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "my-rsvps",
        element: <MyRsvps />,
      },
      {
        path: "my-events",
        element: <MyEvents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
