import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather Search Engine</h1>
    <Search />
  </StrictMode>
);
