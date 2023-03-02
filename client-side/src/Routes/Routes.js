import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CartScreen from "../Pages/Cart/CartScreen";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Register/Login";
import OrdersScreen from "../Pages/Orders/OrdersScreen";
import StartPage from "../Pages/StartPage/StartPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <StartPage></StartPage>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <CartScreen></CartScreen>
            },
            {
                path: '/orders',
                element: <OrdersScreen></OrdersScreen>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])