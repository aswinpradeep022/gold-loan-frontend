import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";
import ToastProvider from "./components/ToastProvider";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <AppRoutes />
          <ToastProvider />
        </main>
      </div>
    </Router>
  );
}

export default App;
