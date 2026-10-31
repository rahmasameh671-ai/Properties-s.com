import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SodicPortfolio from "./components/SodicPortfolio";

/**
 * Main Application Routing Configuration
 * Maps '/properties-s/sodic' and '/sodic' to the SodicPortfolio page component
 * Production Domain: https://properties-s.com/properties-s/sodic
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Dedicated /properties-s/sodic route */}
        <Route path="/properties-s/sodic" element={<SodicPortfolio />} />
        
        {/* Explicit /sodic route */}
        <Route path="/sodic" element={<SodicPortfolio />} />
        
        {/* Root default route */}
        <Route path="/" element={<SodicPortfolio />} />
        
        {/* Wildcard fallback redirection */}
        <Route path="*" element={<Navigate to="/properties-s/sodic" replace />} />
      </Routes>
    </Router>
  );
}

export { SodicPortfolio };
