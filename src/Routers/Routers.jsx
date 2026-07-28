import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MainMenu from "../Pages/MainMenu/MainMenu";
import ShopMenu from "../Pages/ShopMenu/ShopMenu";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import DashBoardHome from "../Pages/DashboardHome/DashBoardHome";
import MyCart from "../Pages/MyCart/MyCart";
import Users from "../Pages/Users/Users";


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
                element: <PrivateRoute><ShopMenu></ShopMenu></PrivateRoute>,
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

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [ 
            
            {
                path: "",
                element: <DashBoardHome></DashBoardHome>,
            },
            {
                path: "mycart",
                element: <MyCart></MyCart>,
            },
            {
                path: "users",
                element: <Users></Users>,
            }
        ]
    }
]);