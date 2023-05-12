import React from "react";
import ReactDOM from "react-dom/client";


//React Element
//React.createElement => React Element JS Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX
//JSX => React.createElement => React Element JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React from JSX</h1>


//Components
//1. class based components => OLD
//2. function based components => NEW

// const TitleComponent = () => (
//     <h1 className="title">
//         Namste React Title
//     </h1>
// )

const TitleComponent = function () {
    return (
        <h1 className="title">
            Namste React Title
        </h1>
    )
}

const HeadingComponent = () => (
    <React.Fragment>
        <div id="container">
            <TitleComponent />
            <h1 className="heading">Namaste React from functional component</h1>
        </div>
        <div id="container-2">

        </div>
    </React.Fragment>
);

// const functionalComponent1 = () => {
//     return <h1>Namaste React from functional based component 2</h1>
// }

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />)