import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { PaymentProvider } from "./context/PaymentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PaymentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PaymentProvider>
    </AuthProvider>
  </React.StrictMode>
);

