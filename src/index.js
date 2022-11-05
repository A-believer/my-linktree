import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
// import Error from "./pages/error";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-col max-w-6xl w-full pb-30 my-5 mx-auto">
      <RouterProvider router={routing} />
      <section
        id="footer"
        className="relative bottom-0 w-full mt-28 mx-4 bg-white md:px-28 "
      >
        <Footer />
      </section>
    </div>
  </React.StrictMode>
);
