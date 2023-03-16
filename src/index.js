import React from "react";
import ReactDOM from "react-dom/client";
import CounterStore from "./CounterStore";
import App from "./App";

const store = new CounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App counter={store} />);
