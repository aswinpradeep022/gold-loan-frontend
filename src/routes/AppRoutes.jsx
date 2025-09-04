import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CustomersList from "../pages/CustomersList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/customers" element={<CustomersList />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
} 
