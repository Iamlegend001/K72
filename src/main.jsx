import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stair from "./Components/common/Stair.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Stair>
      {" "}
      <App />
    </Stair>
  </BrowserRouter>
);
