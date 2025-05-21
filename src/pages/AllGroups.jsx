import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/groups')
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load groups:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 text-xl">
    <h1 className='text-4xl font-bold mt-10'>There is no groups created </h1>

  </div>;

  return (
    
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">All Hobby Groups</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.length === 0 ? (
          <p className="col-span-3 text-center text-gray-500 dark:text-gray-300">No groups found.</p>
        ) : (
          groups.map(group => (
            <div
              key={group._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={group.image}
                alt={group.groupName}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{group.groupName}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{group.category}</p>
                <Link
                  to={`/group/${group._id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  See More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllGroups;
