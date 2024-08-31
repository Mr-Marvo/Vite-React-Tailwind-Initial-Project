import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./providers/ThemeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
