import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { AuthContext } from "../Contexts/AuthContext";

Modal.setAppElement("#root");

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const fetchGroups = () => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/myGroups?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (user?.email) fetchGroups();
  }, [user?.email]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this group?")) {
      const res = await fetch(`http://localhost:5000/groups/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Group deleted!");
        fetchGroups();
      }
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      location: form.location.value,
      image: form.image.value,
      description: form.description.value,
      endDate: form.endDate.value,
    };

    const res = await fetch(
      `http://localhost:5000/groups/${selectedGroup._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGroup),
      }
    );

    if (res.ok) {
      toast.success("Group updated!");
      fetchGroups();
      setSelectedGroup(null);
    }
  };
  useEffect(() => {
    document.title = "My Groups | Hubby Hub";
  }, []);

  return (
    <div className="p-6 max-w-full overflow-x-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text">
        {" "}
        My Created Groups
      </h2>

      <div className="mb-10 text-center ">
        <div className=" mx-auto w-[10%] p-0.5 background rounded-full"></div>
      </div>

      {groups.length === 0 ? (
        <p className="text-gray-500">No groups found.</p>
      ) : (
        <table
          className="min-w-full border border-collapse rounded-lg shadow-lg"
          style={{
            borderColor: "var(--primary)",
            color: "var(--text-base)",
            backgroundColor: "var(--bg-base)",
          }}
        >
          <thead
            className="text-left"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bg-base)",
            }}
          >
            <tr>
              <th className="px-4 py-2 border border-primary ">Group</th>
              <th className=" px-4 py-2 border border-primary">Category</th>
              <th className=" px-4 py-2 border border-primary">Location</th>
              <th className="px-4 py-2 border border-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr
                key={group._id}
                className="hover:bg-gradient-to-r hover:text-base hover:to-pink-100 transition-colors duration-300"
              >
                <td
                  className="border px-4 py-2"
                  style={{ borderColor: "var(--primary)" }}
                >
                  {group.groupName}
                </td>
                <td
                  className=" border px-4 py-2"
                  style={{ borderColor: "var(--primary)" }}
                >
                  {group.category}
                </td>
                <td
                  className=" border px-4 py-2"
                  style={{ borderColor: "var(--primary)" }}
                >
                  {group.location}
                </td>
                <td
                  className="border px-4 py-2 flex gap-2 justify-start"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <button
                    onClick={() => setSelectedGroup(group)}
                    className="background text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      <Modal
        isOpen={!!selectedGroup}
        onRequestClose={() => setSelectedGroup(null)}
        className="max-w-3xl mx-auto my-10 background p-6 rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] focus:outline-none relative"
        overlayClassName="fixed inset-0 z-50 backdrop-blur bg-white/30  flex items-center justify-center px-4"
      >
        {selectedGroup && (
          <>
            <button
              onClick={() => setSelectedGroup(null)}
              className="absolute top-4 right-4 text-3xl font-bold"
              aria-label="Close modal"
              type="button"
            >
              &times;
            </button>

            <form
              onSubmit={handleUpdateSubmit}
              className="space-y-5 text-base "
            >
              <h2 className="text-3xl font-semibold mb-4">Update Group</h2>

              <input
                name="groupName"
                defaultValue={selectedGroup.groupName || ""}
                className="custom-input"
                placeholder="Group Name"
                required
              />
              <input
                name="category"
                defaultValue={selectedGroup.category || ""}
                className="custom-input"
                placeholder="Category"
                required
              />
              <input
                name="location"
                defaultValue={selectedGroup.location || ""}
                className="custom-input"
                placeholder="Location"
                required
              />
              <input
                name="image"
                defaultValue={selectedGroup.image || ""}
                className="custom-input"
                placeholder="Image URL"
                required
              />
              <textarea
                name="description"
                defaultValue={selectedGroup.description || ""}
                className="custom-input resize-none"
                rows="4"
                placeholder="Description"
                required
              ></textarea>
              <input
                name="endDate"
                type="date"
                defaultValue={
                  selectedGroup.endDate
                    ? selectedGroup.endDate.split("T")[0]
                    : ""
                }
                className="custom-input"
                required
              />
              <input
                name="name"
                defaultValue={user?.displayName || ""}
                className="custom-input bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                readOnly
              />
              <input
                name="email"
                defaultValue={user?.email || ""}
                className="custom-input bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                readOnly
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGroup(null)}
                  className="px-6 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-lg hover:opacity-90 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MyGroups;
