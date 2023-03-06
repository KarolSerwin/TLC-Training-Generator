import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);


const App = () => {
    return (<h1>LEts get started</h1>)
}

root.render(<App />);