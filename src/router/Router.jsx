import { Router, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import MemeDetail from "../pages/MemeDetail";
import CreateMeme from "../pages/CreateMeme";
import EditMeme from "../pages/EditMeme";
import { getData } from "../services/services";

export const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
},
    {
        path: 'gallery',
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <Gallery/>,
                loader: getData
            },
            {
                path: '/gallery/meme/:id',
                element: <MemeDetail/>,
                loader: getData
            },
            {
                path: '/gallery/newmeme',
                element: <CreateMeme/>
            },
            {
                path: '/gallery/editmeme/:id',
                element: <EditMeme/>
            }
        ]
    }
])

// export default router