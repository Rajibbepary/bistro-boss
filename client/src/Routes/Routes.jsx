import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Main from "../Layout/Main";
import Order from "../pages/Order/Order/Order";
import Contact from "../pages/Contact/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'our-menu',
          element:<Menu/>
        },
        {
          path:'order/:category',
          element:<Order/>
        },
        {
          path:'contact',
          element: <Contact/>
        }
    ]
  },
]);