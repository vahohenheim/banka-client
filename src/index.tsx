import React from 'react'
import * as ReactDOM from "react-dom";
import App from "./views/layouts/App"

import 'styles/global.css';

const rootElement = document.getElementById('app');

ReactDOM.render(
    <App />
    ,rootElement
);