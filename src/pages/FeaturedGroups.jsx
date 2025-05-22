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
      .catch(() => {
        setError("Failed to load groups.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10 text-lg">Loading featured groups...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="p-6 max-w-7xl mt-16 text-base bg-base mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16"> Featured Groups 🌟</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No ongoing groups found.</p>
        ) : (
          groups.map(group => (
            <div
              key={group._id}
              className="relative border border-transparent bg-base  rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={group.image}
                  alt={group.groupName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-3 text-base">
                <h3 className="text-2xl font-bold ">
                  {group.groupName}
                </h3>
                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  {group.category}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {group.description.length > 100
                    ? group.description.slice(0, 100) + '...'
                    : group.description}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/group/${group._id}`}
                    className="inline-block text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    See Details →
                  </Link>
                </div>
              </div>

              {/* Decorative border ring */}
              <div className="absolute -bottom-1 -left-1 w-full h-full border-2 border-transparent group-hover:border-purple-400 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedGroups;
