import { useEffect, useState } from "react";
import axios from "axios";

const ManageSocialMedia = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [newSocial, setNewSocial] = useState({ platform: "", link: "", icon: null });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5001/api/social-links").then((res) => setSocialLinks(res.data));
  }, []);

  const handleFileChange = (e) => {
    setNewSocial({ ...newSocial, icon: e.target.files[0] });
  };

  const handleAddSocial = async () => {
    try {
      const formData = new FormData();
      formData.append("platform", newSocial.platform);
      formData.append("link", newSocial.link);
      if (newSocial.icon) formData.append("icon", newSocial.icon);

      const res = await axios.post("http://localhost:5001/api/social-links", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSocialLinks([...socialLinks, res.data]);
      setNewSocial({ platform: "", link: "", icon: null });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding social link:", error);
    }
  };

  const handleDeleteSocial = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/social-links/${id}`);
      setSocialLinks(socialLinks.filter((social) => social._id !== id));
    } catch (error) {
      console.error("Error deleting social link:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Social Media</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Social Media
        </button>
      </div>

      {/* Social Media List */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Social Media Links</h3>
        {socialLinks.length === 0 ? (
          <p>No social media links added yet.</p>
        ) : (
          <ul className="space-y-4">
            {socialLinks.map((social) => (
              <li key={social._id} className="p-2 border-b flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={social.icon} alt="icon" className="w-8 h-8" />
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {social.platform}
                  </a>
                </div>
                <button
                  onClick={() => handleDeleteSocial(social._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Social Media Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add Social Media</h3>
            <input
              type="text"
              placeholder="Platform (e.g., Twitter, Facebook)"
              value={newSocial.platform}
              onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Social Media Link"
              value={newSocial.link}
              onChange={(e) => setNewSocial({ ...newSocial, link: e.target.value })}
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
                onClick={handleAddSocial}
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

export default ManageSocialMedia;
