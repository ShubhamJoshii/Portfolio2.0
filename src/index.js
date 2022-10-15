import React from 'react';
import App from "./App"
import "./index.css"

// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <>
//     {/* <h1>Hello</h1> */}
//     <App />
//   </>,
//   document.getElementById('root')
// )

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);