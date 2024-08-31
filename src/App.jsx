import { BrowserRouter } from "react-router-dom";
import Routerset from "./routes/Routerset";
import { ConfigProvider, theme } from "antd";
import { ThemeContext } from "./providers/ThemeContextProvider";
import { useContext } from "react";

function App() {
  const { primaryColor, mode } = useContext(ThemeContext);

  const containerStyle = {
    width: "100%",
    maxWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: primaryColor,
    border: "1px",
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          colorPrimary: primaryColor,
          fontFamily: "Inter-Regular",
        },
      }}
    >
      <div
        style={containerStyle}
        className={`${
          mode === "dark" ? "dark-mode-color" : "light-mode-color"
        }`}
      >
        <BrowserRouter>
          <Routerset />
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
