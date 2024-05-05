import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { NavigationContextProvider } from "./assets/context/NavigationContextProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationContextProvider>
    <App />
  </NavigationContextProvider>
)
