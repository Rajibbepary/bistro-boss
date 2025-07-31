import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Main from "../Layout/Main";


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
        }
    ]
  },
]);