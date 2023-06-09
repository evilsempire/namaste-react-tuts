import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
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


const AppLayout = () => {
    return (
        <div className="app">
            {/* //will have all the components combined */}
            <HeaderComponent />
            <Body />
        </div>
    )
}

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />)