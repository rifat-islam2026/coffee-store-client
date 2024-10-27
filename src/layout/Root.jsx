import {
    createBrowserRouter
} from "react-router-dom";
import App from '../App';
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/addCoffee",
                element:<AddCoffee/>
            },
            {
                path: "/updateCoffee",
                element:<UpdateCoffee/>
            }
        ]
    },
]);

export default router;
