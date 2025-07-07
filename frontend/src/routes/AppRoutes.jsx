import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import WebDevCatalog from '../pages/WebDevCatalog';
import SecurityCatalog from '../pages/SecurityCatalog';
import RequirementForm from '../pages/RequirementForm';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/services/web-dev" element={<ProtectedRoute><WebDevCatalog /></ProtectedRoute>} />
      <Route path="/services/security" element={<ProtectedRoute><SecurityCatalog /></ProtectedRoute>} />
      <Route path="/form" element={<ProtectedRoute><RequirementForm /></ProtectedRoute>} />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-[60vh] text-red-500 text-xl font-semibold">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
