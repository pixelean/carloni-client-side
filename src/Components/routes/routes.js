import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../Home/Home/Home";
import NotFound from "../Share/NotFound/NotFound";
import Services from "../Services/Services";
import About from "../About/About";
import SignUp from "../Authentication/SignUp/SignUp";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/home", element: <Home></Home> },
            { path: "/services", element: <Services></Services> },
            { path: "/about", element: <About></About> },
            { path: "/signUp", element: <SignUp></SignUp> },
            // { path: "/products", element: <Products></Products> },

        ]
    },
    { path: "*", element: <NotFound></NotFound>}
   

])

export default routes;