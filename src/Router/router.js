import JavaScript from "../Pages/JavaScript";
import Example from "../Pages/Example";
import Error from '../Pages/Error';
import Home from "../Pages/Home"
import { Navigate } from "react-router-dom";


export const publicRoutes = [
    { exact: true, path: "", element: <Home />, key: "0.5" },
    { exact: true, path: "/cheat_sheet", element: <Home/>, key: "1" },
    { exact: true, path: "/javascript", element: <JavaScript/> , key: "2" },
    { exact: true, path: "/example", element: <Example/> , key: "3" },
    { exact: true, path: "/error", element: <Error />, key: "5" },
    { exact: true, path: "*", element: <Navigate to="/error" replace />, key: "end" },

]