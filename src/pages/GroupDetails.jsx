import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const GroupDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    fetch(`https://hobby-hub-server-gamma.vercel.app/groups/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroup(data);
        const today = new Date();
        const deadline = new Date(data.endDate);
        setIsExpired(deadline < today);
      });
  }, [id]);
  useEffect(() => {
      document.title = "Group Details | Hubby Hub";
    }, []);
  const handleJoin = async () => {
    if (!user) {
      Swal.fire('Oops!', 'Please log in to join a group.', 'warning');
      return;
    }

    if (isExpired) {
      Swal.fire('Oops!', 'This group is no longer active.', 'error');
      return;
    }

    const joinedGroup = {
      userEmail: user.email,
      userName: user.displayName,
      groupId: id,
      groupName: group.groupName,
      joinedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('https://hobby-hub-server-gamma.vercel.app/joinedGroups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(joinedGroup),
      });

      const data = await res.json();
      if (res.ok && data.insertedId) {
        setJoined(true);
        Swal.fire('Success', 'You have joined the group!', 'success');
      } else {
        throw new Error('Join request failed');
      }
    } catch (error) {
      console.error('Join Error:', error);
      Swal.fire('Error', 'Could not join group. Try again.', 'error');
    }
  };

  if (!group) return <p>Loading...</p>;
  

  return (
    <div className="p-5 space-y-4 my-15 max-w-2xl mx-auto 
    bg-base border-b-pink-400 rounded-lg  shadow-2xl shadow-pink-400 transition duration-300">
      <img
        src={group.image}
        alt={group.groupName}
        className="w-full h-auto max-h-[400px] object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold">{group.groupName}</h1>
      <p><strong>Category:</strong> {group.category}</p>
      <p><strong>Description:</strong> {group.description}</p>
      <p><strong>Location:</strong> {group.location}</p>
      <p><strong>Max Members:</strong> {group.maxMembers}</p>
      <p><strong>Deadline:</strong> {new Date(group.endDate).toLocaleDateString()}</p>

      {isExpired ? (
        <p className="text-red-600 font-semibold text-center mt-4">
          This group is no longer active.
        </p>
      ) : (
        <button
          className={`btn w-full ${joined ? 'btn-disabled bg-gray-400' : 'btn-success'}`}
          onClick={handleJoin}
          disabled={joined}
        >
          {joined ? 'Joined' : 'Join Group'}
        </button>
      )}
    </div>
  );
};

export default GroupDetails;
