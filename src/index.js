import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/contact";
import Trackparams from "./components/trackparams";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "../Utils/userContext";
import { Provider } from "react-redux";
import Store from "../Utils/Store";
import Cart from "./components/Cart";
// const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About-Us"));
const Applayout = () => {
  let [iscontext, setiscontext] = useState({
    name: "siddhesh",
    email: "sid@gmail.com",
  });
  return (
    <Provider store={Store}>
      <UserContext.Provider
        value={{ user: iscontext, setiscontext: setiscontext }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={() => {
              return <h1>Loading...Please Wait</h1>;
            }}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/trackparams/:id",
        element: <Trackparams />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
