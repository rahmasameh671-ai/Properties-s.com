import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SodicPortfolio from "./components/SodicPortfolio";

/**
 * Main Application Routing Configuration
 * Maps '/sodic-2', '/sodic', and '/properties-s/sodic' to SodicPortfolio
 * Production Domain: https://properties-s.com/sodic-2
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Dedicated /sodic-2 route */}
        <Route path="/sodic-2" element={<SodicPortfolio />} />
        
        {/* Explicit /sodic route */}
        <Route path="/sodic" element={<SodicPortfolio />} />
        
        {/* Dedicated /properties-s/sodic route */}
        <Route path="/properties-s/sodic" element={<SodicPortfolio />} />
        
        {/* Root default route */}
        <Route path="/" element={<SodicPortfolio />} />
        
        {/* Wildcard fallback redirection */}
        <Route path="*" element={<Navigate to="/sodic-2" replace />} />
      </Routes>
    </Router>
  );
}

export { SodicPortfolio };
