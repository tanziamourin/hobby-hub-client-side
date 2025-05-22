import { useState } from 'react';
import Lottie from 'lottie-react';
// import starsAnimation from '../lotties/stars.json'; // adjust path as needed

const hobbySuggestions = {
  January: { icon: '🧘', hobby: 'Try Yoga for inner peace' },
  February: { icon: '🎨', hobby: 'Explore abstract painting' },
  March: { icon: '📸', hobby: 'Capture nature through photography' },
  April: { icon: '🌿', hobby: 'Start a mini herb garden' },
  May: { icon: '🎶', hobby: 'Make a relaxing music playlist' },
  June: { icon: '📚', hobby: 'Read a new genre of books' },
  July: { icon: '🚴', hobby: 'Go on a biking adventure' },
  August: { icon: '🍳', hobby: 'Experiment with baking' },
  September: { icon: '🎮', hobby: 'Try a new indie game' },
  October: { icon: '🧩', hobby: 'Solve complex puzzles' },
  November: { icon: '📝', hobby: 'Start daily journaling' },
  December: { icon: '❄️', hobby: 'Craft winter DIY decor' },
};

const getRandomMonth = () => {
  const months = Object.keys(hobbySuggestions);
  return months[Math.floor(Math.random() * months.length)];
};

const HobbyHoroscope = () => {
  const [selectedMonth, setSelectedMonth] = useState(getRandomMonth());

  const { icon, hobby } = hobbySuggestions[selectedMonth];

  return (
    <section className="max-w-xl mx-auto my-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 shadow-lg text-center relative overflow-hidden">
      {/* Lottie background animation */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
        <Lottie animationData={starsAnimation} loop autoplay />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">🌟 Your Hobby Horoscope</h2>
        <p className="text-lg mb-2">
          For the month of <span className="font-semibold">{selectedMonth}</span>:
        </p>
        <div className="text-4xl mb-4">{icon}</div>
        <p className="text-xl font-medium">{hobby}</p>
        <button
          onClick={() => setSelectedMonth(getRandomMonth())}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          🔄 Get Another Horoscope
        </button>
      </div>
    </section>
  );
};

export default HobbyHoroscope;
