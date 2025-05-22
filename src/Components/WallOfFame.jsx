import React from 'react';
const featuredUsers = [
  {
    name: 'Ayesha Rahman',
    hobby: 'Art & Calligraphy',
    image: 'https://i.pravatar.cc/150?img=47',
    title: 'Created over 200+ calligraphy tutorials',
  },
  {
    name: 'Nabil Ahmed',
    hobby: 'Robotics & Coding',
    image: 'https://i.pravatar.cc/150?img=33',
    title: 'Founded Robotics for Kids group',
  },
  {
    name: 'Sadia Khatun',
    hobby: 'Gardening',
    image: 'https://i.pravatar.cc/150?img=23',
    title: 'Inspired 500+ users with balcony gardening tips',
  },
];

const WallOfFame = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 my-12 text-center">
      <h2 className="text-3xl font-bold mb-8">🏆 HobbyHub Wall of Fame</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {featuredUsers.map((user, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-indigo-600 text-sm mb-1">{user.hobby}</p>
            <p className="text-gray-600 text-sm">{user.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WallOfFame;


