import React from 'react';
const featuredUsers = [
  {
    name: 'Tanzia Mourin Chowdhury',
    hobby: 'Art & Calligraphy',
    image: 'https://i.pravatar.cc/150?img=47',
    title: 'Created over 200+ calligraphy tutorials',
  },
  {
    name: 'Waziha Jarin Chowdhury',
    hobby: 'Robotics & Coding',
    image: 'https://i.pravatar.cc/150?img=33',
    title: 'Founded Robotics for Kids group',
  },
  {
    name: 'Walida Nourin Chowdhruy',
    hobby: 'Gardening',
    image: 'https://i.pravatar.cc/150?img=23',
    title: 'Inspired 500+ users with balcony gardening tips',
  },
];

const WallOfFame = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 my-15 text-center">
      <h2 className="text-3xl font-bold  mb-10"> HobbyHub Wall of Fame 🏆</h2>
<div className="mb-10 text-center ">
  <div className=" mx-auto w-[10%] p-0.5 background rounded-full"></div>
</div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {featuredUsers.map((user, id) => (
          <div
            key={id}
            className="background rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-base  mb-1">{user.hobby}</p>
            <p className="text-gray-600 text-sm">{user.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WallOfFame;


