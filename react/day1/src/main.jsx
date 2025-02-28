import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx'
import App from './App.jsx'
// import React from 'react'

// if js use  createelement 
// let Apps = () => {
//     return React.createElement("h1", {}, "without js write like this")
// }

createRoot(document.getElementById('root')).render(
    <App />
)
