import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Paths } from "./path";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Article from "./page/Article";


const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Home/>
    },
    {
        path: Paths.blog,
        element: <Blog/>
    },
    {
        path: Paths.article,
        element: <Article/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router}/>);

