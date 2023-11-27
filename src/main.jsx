import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage/DetailsPage.jsx";
import WhatsOnPage from "./Pages/WhatsOnPage/WhatsOnPage.jsx";
import AllMoviesPage from "./Pages/AllMoviesPage/AllMoviesPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/home',

            }
        ]
    },
    {
        path: "/details",
        element: <DetailsPage />,
    },
    {
        path: "/what'sOn",
        element: <WhatsOnPage />,
    },
    {
        path: "/allMovies",
        element: <AllMoviesPage />,
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
