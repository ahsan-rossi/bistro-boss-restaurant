import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MainMenu from "../Pages/MainMenu/MainMenu";
import ShopMenu from "../Pages/ShopMenu/ShopMenu";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <MainMenu></MainMenu>,
            },
            {
                path: '/shop/:shopCategory',
                element: <ShopMenu></ShopMenu>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
            },
        ]     

    } 
]);