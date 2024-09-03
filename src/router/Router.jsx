import { Router, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CreateMeme from "../pages/CreateMeme";
import EditMeme from "../pages/EditMeme";

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true, 
            element: <Home/>
        },
        {
            path: 'newmeme',
            element: <CreateMeme/>
        },
        {
            path: 'editmeme',
            element: <EditMeme/>
        }
    ]
}])

// export default router