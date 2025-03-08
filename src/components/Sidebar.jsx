import { NavLink } from "react-router-dom";
import { FaUsers, FaProjectDiagram, FaBuilding, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
      <nav className="space-y-2">
        <NavLink to="/admin" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-md">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/admin/team" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-md">
          <FaUsers /> Manage Team
        </NavLink>
        <NavLink to="/admin/projects" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-md">
          <FaProjectDiagram /> Manage Projects
        </NavLink>
        <NavLink to="/admin/socials" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-md">
          <FaBuilding /> Manage Company
        </NavLink>
      </nav>
    </div>
  );
}
