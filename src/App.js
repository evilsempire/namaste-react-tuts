import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu";
//Components
//1. class based components => OLD
//2. function based components => NEW


/**
 * Header
 *  - Logo
 *  - Navbar
 * Body
 *  - SearchBar
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - image
 *          - name, star rating, cuisins, delivery time
 *          
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 */

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    return (
        <div className="app">
            {/* //will have all the components combined */}
            <HeaderComponent />
            <Outlet />
        </div>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:<Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
])

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<RouterProvider  router={appRouter}/>)