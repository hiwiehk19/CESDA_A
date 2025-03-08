// import { useEffect, useState } from "react";
// import { getTeam, addTeamMember, deleteTeamMember } from "../services/api";

// export default function ManageTeam() {
//   const [team, setTeam] = useState([]);
//   const [newMember, setNewMember] = useState({ name: "", role: "" });

//   useEffect(() => {
//     fetchTeam();
//   }, []);

//   const fetchTeam = async () => {
//     const { data } = await getTeam();
//     setTeam(data);
//   };

//   const handleAddMember = async () => {
//     await addTeamMember(newMember);
//     setNewMember({ name: "", role: "" });
//     fetchTeam();
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Team</h2>
//       <div className="mb-4">
//         <input className="border p-2 mr-2" placeholder="Name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
//         <input className="border p-2 mr-2" placeholder="Role" value={newMember.role} onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} />
//         <button onClick={handleAddMember} className="bg-blue-500 text-white px-4 py-2">Add</button>
//       </div>
//       <ul>
//         {team.map((member) => (
//           <li key={member._id} className="border-b py-2 flex justify-between">
//             {member.name} - {member.role}
//             <button onClick={() => deleteTeamMember(member._id).then(fetchTeam)} className="text-red-500">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";

const ManageTeam = () => {
  const [team, setTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    title: "",
    bio: "",
    linkedin: "",
    email: "",
    image: null,
  });

  useEffect(() => {
    axios.get("http://localhost:5001/api/team").then((res) => setTeam(res.data));
  }, []);

  const handleFileChange = (e) => {
    setNewMember({ ...newMember, image: e.target.files[0] });
  };

  const handleAddMember = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newMember.name);
      formData.append("title", newMember.title);
      formData.append("bio", newMember.bio);
      formData.append("linkedin", newMember.linkedin);
      formData.append("email", newMember.email);
      if (newMember.image) formData.append("image", newMember.image);

      const res = await axios.post("http://localhost:5001/api/team", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTeam([...team, res.data]);
      setNewMember({ name: "", title: "", bio: "", linkedin: "", email: "", image: null });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding team member:", error);
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/team/${id}`);
      setTeam(team.filter((member) => member._id !== id)); // Update state to remove deleted member
    } catch (error) {
      console.error("Error deleting team member:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Team</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Team Member
        </button>
      </div>

      {/* Team List */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Team Members</h3>

        {team.length === 0 ? (
          <p className="text-gray-500">No team members added yet.</p>
        ) : (
          <ul className="space-y-4">
            {team.map((member) => (
              <li key={member._id} className="p-2 border-b flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={member.image ? `http://localhost:5001${member.image}` : `http://localhost:5001/uploads/manager.png`} 
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{member.name} - {member.title}</p>
                    <p className="text-gray-500">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      LinkedIn
                    </a>
                    <p className="text-gray-500">{member.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteMember(member._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Team Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add Team Member</h3>
            <input
              type="text"
              placeholder="Name"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Title"
              value={newMember.title}
              onChange={(e) => setNewMember({ ...newMember, title: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <textarea
              placeholder="Bio"
              value={newMember.bio}
              onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="LinkedIn Profile"
              value={newMember.linkedin}
              onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
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
                onClick={handleAddMember}
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

export default ManageTeam;
