import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../screens/Home";
import App from "../index";
import TestComponent from "../screens/TestComponent";

export default function Router () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,

        },
        {
            path: "redux-test",
            element: <TestComponent/>,
        }
    ])

    return (
        <App>
            <RouterProvider router={router}/>
        </App>
    )
}

