import React from "react";
import "antd/dist/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServerList from "./pages/ServerList";
import ServerDetail from "./components/serverDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Guidelines from "./pages/Guidelines";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Footer";

import "./App.css";
import { ServerProvider } from "./context/ServerContext";

function App() {
  return (
    <Router>
      <ServerProvider>
        <Navbar />
        <div className={"content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/server-list" element={<ServerList />} />
            <Route path="/server/:id" element={<ServerDetail />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/guidelines" element={<Guidelines />} />
          </Routes>
        </div>
        <AppFooter />
      </ServerProvider>
    </Router>
  );
}

export default App;
