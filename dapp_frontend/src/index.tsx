import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://yom2vzgrcd5h.usemoralis.com:2053/server" appId="oMYHFrCE7OOGODT771HrFRR5GdLFcJGBbyudWkjL">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);