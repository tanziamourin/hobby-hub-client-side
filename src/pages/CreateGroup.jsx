import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const groupData = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: +form.maxMembers.value,
      endDate: form.endDate.value,
      image: form.image.value,
      userName: user?.displayName,
      userEmail: user?.email
    };

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData)
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Backend Error Response:", text);
        Swal.fire('Error', 'Failed to create group. Check console.', 'error');
        return;
      }

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire('Success', 'Group Created!', 'success').then(() => {
          navigate('/groups'); // ✅ Redirect to All Groups after success
        });
      } else {
        Swal.fire('Oops!', 'Group creation did not return expected result.', 'error');
      }
    } catch (error) {
      console.error('🚨 Fetch Error:', error);
      Swal.fire('Error', 'Something went wrong during the request.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCreate} className="p-4 space-y-3 max-w-xl mx-auto">
      <input name="groupName" placeholder="Group Name" required className="input input-bordered w-full" />
      <select name="category" required className="select select-bordered w-full">
        <option value="">Select a category</option>
        <option>Drawing & Painting</option>
        <option>Photography</option>
        <option>Video Gaming</option>
        <option>Fishing</option>
        <option>Running</option>
        <option>Cooking</option>
        <option>Reading</option>
        <option>Writing</option>
      </select>
      <textarea name="description" placeholder="Description" required className="textarea textarea-bordered w-full" />
      <input name="location" placeholder="Meeting Location" required className="input input-bordered w-full" />
      <input name="maxMembers" type="number" placeholder="Max Members" required className="input input-bordered w-full" />
      <input name="endDate" type="date" required className="input input-bordered w-full" />
      <input name="image" placeholder="Image URL" required className="input input-bordered w-full" />
      <input value={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
      <input value={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />
      <button type="submit" className="btn btn-primary w-full" disabled={loading}>
        {loading ? "Creating..." : "Create Group"}
      </button>
    </form>
  );
};

export default CreateGroup;
