import React from "react";
import ReactDOM from "react-dom/client"; //version 18
//import ReactDOM from 'react-dom'; //versiones anteriores a 18
import "./index.css";
import App from "./App/index.js";

//version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//versiones anteriores a 18
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
