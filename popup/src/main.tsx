import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "./main.css";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
