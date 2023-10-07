import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ConfigureStore from "./components/cart/config";
import { persistStore } from "redux-persist";
const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(ConfigureStore);
root.render(
  <React.StrictMode>
    <Provider store={ConfigureStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
