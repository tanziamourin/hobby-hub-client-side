import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/groups')
      .then(res => res.json())
      .then(data => {
        const now = new Date();
        const ongoing = data.filter(group => new Date(group.endDate) >= now);
        setGroups(ongoing.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load groups.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10 text-lg">Loading featured groups...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Featured Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groups.length === 0 ? (
          <p>No ongoing groups found.</p>
        ) : (
          groups.map(group => (
            <div key={group._id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={group.image} alt={group.groupName} className="h-40 w-full object-cover rounded" />
              <h3 className="text-xl font-semibold mt-3">{group.groupName}</h3>
              <p className="text-sm text-gray-600">{group.category}</p>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {group.description.length > 100
                  ? group.description.slice(0, 100) + '...'
                  : group.description}
              </p>
              <Link to={`/group/${group._id}`} className="inline-block mt-4 text-blue-600 hover:underline">
                See Details
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedGroups;
