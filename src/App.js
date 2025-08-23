import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import CustomersPage from "pages/customer/CustomersPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <header className="app-header">
        <nav className="nav">
          <Link to="/customers">Customers</Link>
          {/* We will add /items, /loans later */}
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/customers" replace />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
    </Router>
  );
}
