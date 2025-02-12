import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import ErrorPage from "./pages/Error.jsx";
import LogInForm from "./pages/LogIn.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AllProvince from "./pages/Province.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LogInForm />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/province",
    element: <AllProvince />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
