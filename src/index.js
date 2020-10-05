import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; 

import "./index.css";
import {App} from "./components";
import products from "./reducers";


const store = createStore(products);


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);