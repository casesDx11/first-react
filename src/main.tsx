import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MyPascalCaseComponent from "./MyPascalCaseComponent.tsx";
import Card from "./Card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card />
    <MyPascalCaseComponent />
    <App />
  </StrictMode>,
);
