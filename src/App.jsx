// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import DashboardHome from "./components/DashboardHome";
// import ManageTeam from "./components/ManageTeam";
// import ManageProjects from "./components/ManageProjects";
// import ManageCompany from "./components/ManageCompany";

// export default function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6">
//           <Routes>
//             <Route path="/" element={<DashboardHome />} />
//             <Route path="/team" element={<ManageTeam />} />
//             <Route path="/projects" element={<ManageProjects />} />
//             <Route path="/company" element={<ManageCompany />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/admin/*"
          element={isAuthenticated ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
