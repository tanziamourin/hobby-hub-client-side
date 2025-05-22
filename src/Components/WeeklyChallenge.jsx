import { FaRunning, FaPaintBrush, FaCamera, FaGuitar } from 'react-icons/fa';

const challenges = [
  {
    title: "Paint Your Mood",
    description: "Express how you feel today using colors and brushes!",
    icon: <FaPaintBrush />,
    category: "Art",
  },
  {
    title: "Nature Photo Hunt",
    description: "Take a picture of something green near you. 🌿",
    icon: <FaCamera />,
    category: "Photography",
  },
  {
    title: "One Chord Wonder",
    description: "Record a 15s sound clip of your favorite chord on any instrument.",
    icon: <FaGuitar />,
    category: "Music",
  },
  {
    title: "5K Virtual Run",
    description: "Track a 5km walk/run and post your route screenshot.",
    icon: <FaRunning />,
    category: "Fitness",
  },
];

const WeeklyChallenge = () => {
  const thisWeek = challenges[Math.floor(Math.random() * challenges.length)];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-10 px-6 rounded-lg max-w-4xl mx-auto mt-16 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl text-purple-600">{thisWeek.icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">
          Weekly Hobby Challenge: <span className="text-purple-700">{thisWeek.category}</span>
        </h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">{thisWeek.description}</p>
      <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition">
        Join Challenge
      </button>
    </section>
  );
};

export default WeeklyChallenge;
