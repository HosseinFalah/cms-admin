import { createBrowserRouter } from "react-router-dom";
import { Products, Comments, Users, Orders, Offs } from "../Pages";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'comments',
                element: <Comments/>
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'orders',
                element: <Orders/>
            },
            {
                path: 'offs',
                element: <Offs/>
            },
        ]
    },
]);

export { router }