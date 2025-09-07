import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SidebarComponent from "./components/Sidebar";
import ToastProvider from "./components/ToastProvider";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <SidebarProvider>
          <SidebarComponent />
          <main className="flex-1">
            <AppRoutes />
            <ToastProvider />
          </main>
        </SidebarProvider>
      </div>
    </Router>
  );
}

export default App;
