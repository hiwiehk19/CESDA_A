// import { useEffect, useState } from "react";
// import { getProjects, addProject, deleteProject } from "../services/api";

// export default function ManageProjects() {
//   const [projects, setProjects] = useState([]);
//   const [newProject, setNewProject] = useState({ title: "", description: "" });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     const { data } = await getProjects();
//     setProjects(data);
//   };

//   const handleAddProject = async () => {
//     await addProject(newProject);
//     setNewProject({ title: "", description: "" });
//     fetchProjects();
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
//       <div className="mb-4">
//         <input className="border p-2 mr-2" placeholder="Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
//         <button onClick={handleAddProject} className="bg-blue-500 text-white px-4 py-2">Add</button>
//       </div>
//       <ul>
//         {projects.map((project) => (
//           <li key={project._id} className="border-b py-2 flex justify-between">
//             {project.title}
//             <button onClick={() => deleteProject(project._id).then(fetchProjects)} className="text-red-500">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", link: "" });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5001/api/projects").then((res) => setProjects(res.data));
  }, []);

  const handleAddProject = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/projects", newProject);
      setProjects([...projects, res.data]);
      setNewProject({ title: "", description: "", link: "" }); // Reset form
      setShowModal(false); // Close modal after adding
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Header with Add Project Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        {projects.length === 0 ? (
          <p>No projects added yet.</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project._id} className="p-2 border-b flex justify-between items-center">
                <div>
                  <h4 className="font-bold">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {project.link}
                  </a>
                </div>
                <button
                  onClick={() => handleDeleteProject(project._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Project Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
