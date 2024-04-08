import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    },
]);