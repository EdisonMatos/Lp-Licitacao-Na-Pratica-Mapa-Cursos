import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import Index from "./pages/Index.jsx";

import { ColorModeProvider } from "./context/UseContextArchive.jsx";
import GlobalClickEvent from "./context/GlobalClickEvent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    <GlobalClickEvent />
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  </ColorModeProvider>,
);
