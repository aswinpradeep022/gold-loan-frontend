import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CustomersList from "../pages/CustomersList";
import CustomerForm from "../pages/AddCustomer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/customers" element={<CustomersList />} />
      <Route path="/new-customer" element={<CustomerForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
