import { Router, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import MemeDetail from "../pages/MemeDetail";
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
            path: 'gallery',
            element: <Gallery/>
        },
        {
            path: 'meme/:id',
            element: <MemeDetail/>
        },
        {
            path: 'newmeme',
            element: <CreateMeme/>
        },
        {
            path: 'editmeme/:id',
            element: <EditMeme/>
        }
    ]
}])

// export default router