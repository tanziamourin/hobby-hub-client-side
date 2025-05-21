import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { AuthContext } from '../Contexts/AuthContext';

Modal.setAppElement('#root'); // required for accessibility

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const fetchGroups = () => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/myGroups?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched groups:', data);
        setGroups(data);
      })
      .catch(error => {
        console.error('Error fetching groups:', error);
      });
  };

  useEffect(() => {
    if (user?.email) {
      fetchGroups();
    }
  }, [user?.email]);

  const handleDelete = async id => {
    if (confirm('Are you sure you want to delete this group?')) {
      const res = await fetch(`http://localhost:5000/groups/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        toast.success('Group deleted!');
        fetchGroups();
      }
    }
  };

  const handleUpdateSubmit = async e => {
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

    const res = await fetch(`http://localhost:5000/groups/${selectedGroup._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGroup),
    });

    if (res.ok) {
      toast.success('Group updated!');
      fetchGroups();
      setSelectedGroup(null); // Close modal
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Created Groups</h2>

      {groups.length === 0 ? (
        <p className="text-gray-500">No groups found.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full border border-gray-300 rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Group</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groups.map(group => (
                  <tr key={group._id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{group.groupName}</td>
                    <td className="border border-gray-300 px-4 py-2">{group.category}</td>
                    <td className="border border-gray-300 px-4 py-2">{group.location}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => setSelectedGroup(group)}
                        className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {groups.map(group => (
              <div key={group._id} className="bg-white border rounded-lg p-4 shadow">
                <p><span className="font-semibold">Group:</span> {group.groupName}</p>
                <p><span className="font-semibold">Category:</span> {group.category}</p>
                <p><span className="font-semibold">Location:</span> {group.location}</p>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => setSelectedGroup(group)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Update Modal */}
      <Modal
        isOpen={!!selectedGroup}
        onRequestClose={() => setSelectedGroup(null)}
        className="w-full max-w-2xl mx-4 sm:mx-auto my-10 bg-white p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh] focus:outline-none relative"
        overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2"
      >
        {selectedGroup && (
          <>
            <button
              onClick={() => setSelectedGroup(null)}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
              type="button"
            >
              &times;
            </button>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold mb-2">Update Group</h2>

              <input
                name="groupName"
                defaultValue={selectedGroup.groupName || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Group Name"
                required
              />

              <input
                name="category"
                defaultValue={selectedGroup.category || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Category"
                required
              />

              <input
                name="location"
                defaultValue={selectedGroup.location || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Location"
                required
              />

              <input
                name="image"
                defaultValue={selectedGroup.image || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Image URL"
                required
              />

              <textarea
                name="description"
                defaultValue={selectedGroup.description || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows="3"
                placeholder="Description"
                required
              ></textarea>

              <input
                name="endDate"
                type="date"
                defaultValue={
                  selectedGroup.endDate
                    ? selectedGroup.endDate.split('T')[0]
                    : ''
                }
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />

              <input
                name="name"
                defaultValue={user?.displayName || ''}
                className="w-full px-4 py-2 bg-gray-100 rounded border border-gray-300"
                readOnly
              />

              <input
                name="email"
                defaultValue={user?.email || ''}
                className="w-full px-4 py-2 bg-gray-100 rounded border border-gray-300"
                readOnly
              />

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedGroup(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
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
