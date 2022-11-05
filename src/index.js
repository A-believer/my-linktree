import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
// import Error from "./page/Error";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    // element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <RouterProvider router={routing} />
      <section
        id="footer"
        className="relative mt-12 bottom-0 w-full px-5 pt-12 bg-white md:px-28 md:pb-10"
      >
        <Footer />
      </section>
    </div>
  </React.StrictMode>
);
