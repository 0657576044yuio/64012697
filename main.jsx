import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyContextProvider } from "./context/MyContext"; // ตัวอย่างการใช้ Context
import { Provider } from "react-redux"; // สำหรับ Redux
import store from "./store"; // Redux Store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* ใช้ Redux */}
      <MyContextProvider>  {/* ใช้ Context */}
        <App />
      </MyContextProvider>
    </Provider>
  </React.StrictMode>
);
