import React from "react";
import ReactDOM from "react-dom/client";
{/* <div id="parent">
        <div id="child">
            <h1>Hello from H1 tag</h1>
        </div>
    </div> */}

{/* <div id="parent">
        <div id="child">
            <h1>Hello from H1 tag</h1>
            <h2>Hello from H2 tag</h2>
        </div>
    </div> */}

// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {}, "Hello from H1 tag")))


//How to create two childerm?
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "children"
}, [
    React.createElement("h1", {}, "Hello from H1"),
    React.createElement("h2", {}, "Hello from H2")
]))

const heading = React.createElement("h1", {
    "id": "heading"
}, "Hello from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)