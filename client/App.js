import React from "react";
import ReactDom from "react-dom";
import "./styles/styles.scss";

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"));