import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebaseConfig from "./DBConnection/firebaseConfig";
import { Provider } from "react-redux";
import store from "./Feature/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
