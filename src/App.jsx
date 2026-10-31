import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SodicPortfolio from "../components/SodicPortfolio";

/**
 * Main Application Routing Configuration
 * Explicitly maps '/sodic' to the SodicPortfolio page component
 * Production Domain: https://properties-s.com/sodic
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Explicit /sodic route requested for properties-s.com/sodic */}
        <Route path="/sodic" element={<SodicPortfolio />} />
        
        {/* Root default route */}
        <Route path="/" element={<SodicPortfolio />} />
        
        {/* Wildcard fallback redirection */}
        <Route path="*" element={<Navigate to="/sodic" replace />} />
      </Routes>
    </Router>
  );
}

export { SodicPortfolio };
