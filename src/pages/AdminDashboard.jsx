// import { Routes, Route, Link } from "react-router-dom";
// import ManageTeam from "./ManageTeam";
// import ManageProjects from "./ManageProjects";
// import ManageSocials from "./ManageCompany";

// const AdminDashboard = ({ onLogout }) => {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-6">
//         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//         <ul>
//           <li className="mb-2"><Link to="/admin/team" className="hover:underline">Manage Team</Link></li>
//           <li className="mb-2"><Link to="/admin/projects" className="hover:underline">Manage Projects</Link></li>
//           <li className="mb-2"><Link to="/admin/socials" className="hover:underline">Company Social Media</Link></li>
//         </ul>
//         <button onClick={onLogout} className="mt-6 bg-red-500 px-4 py-2 rounded hover:bg-red-600">
//           Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Routes>
//           <Route path="team" element={<ManageTeam />} />
//           <Route path="projects" element={<ManageProjects />} />
//           <Route path="socials" element={<ManageSocials />} />
//           <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
//import Header from "../components/Header";
import ManageTeam from "./ManageTeam";
import ManageProjects from "./ManageProjects";
import ManageSocials from "./ManageCompany";
import DashboardHome from "./DashboardHome";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1">
       
        <div className="p-6">
          <Routes>
            <Route path="team" element={<ManageTeam />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="socials" element={<ManageSocials />} />
            <Route path="/" element={<DashboardHome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
