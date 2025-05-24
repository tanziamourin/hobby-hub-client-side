import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      userEmail: user?.email,
    };

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData),
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
          navigate('/groups');
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

    useEffect(() => {
      document.title = "Create Group | Hobby Hub";
    }, []);

  return (
    <form
      onSubmit={handleCreate}
      className="p-8 max-w-3xl mx-auto my-12 rounded-2xl  
      bg-base border-b-pink-400   shadow-2xl shadow-pink-400 transition duration-300
      "
    
    >
      <h2 className="text-3xl font-extrabold text-center mb-10 text">Create a New Group</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="groupName" placeholder="Group Name" required className="custom-input" />
        <select name="category" required className="custom-input">
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
        <input name="location" placeholder="Meeting Location" required className="custom-input" />
        <input name="maxMembers" type="number" placeholder="Max Members" required className="custom-input" />
        <input name="endDate" type="date" required className="custom-input" />
        <input name="image" placeholder="Image URL" required className="custom-input" />
      </div>

      <textarea
        name="description"
        placeholder="Description"
        required
        className="custom-input mt-6 h-32 resize-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <input value={user?.displayName} readOnly className="custom-input bg-base  cursor-not-allowed" />
        <input value={user?.email} readOnly className="custom-input bg-base  cursor-not-allowed" />
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-8 rounded-xl font-bold text-lg background text-white hover:opacity-90 transition duration-300 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Group'}
      </button>
    </form>
  );
};

export default CreateGroup;
