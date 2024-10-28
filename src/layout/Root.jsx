import {
    createBrowserRouter
} from "react-router-dom";
import App from '../App';
import AddCoffee from "../pages/AddCoffee";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateCoffee from "../pages/UpdateCoffee";
import User from "../pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: () => fetch('http://localhost:5000/coffee'),   
    },
    {
        path: "/addCoffee",
        element: <AddCoffee />
    },
    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
        path: "/signUp",
        element:<SignUp/>
    },
    {
        path: "/user",
        element: <User />,
        loader: () => fetch('http://localhost:5000/user')
    },
    {
        path: '/signIn',
        element:<SignIn/>
    }

]);

export default router;
