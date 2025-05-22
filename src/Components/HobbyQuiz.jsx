import { useState } from 'react';
import { FaPaintBrush, FaCamera, FaGamepad, FaGuitar } from 'react-icons/fa';

const quizData = [
  {
    question: "Which activity do you enjoy the most?",
    options: [
      { text: "Painting", icon: <FaPaintBrush /> },
      { text: "Photography", icon: <FaCamera /> },
      { text: "Gaming", icon: <FaGamepad /> },
      { text: "Playing Music", icon: <FaGuitar /> },
    ],
  },
  {
    question: "Which environment excites you the most?",
    options: [
      { text: "Art Studio", icon: <FaPaintBrush /> },
      { text: "Nature Trails", icon: <FaCamera /> },
      { text: "Virtual World", icon: <FaGamepad /> },
      { text: "Concert Stage", icon: <FaGuitar /> },
    ],
  },
  // Add more questions here
];

const HobbyQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      alert("Quiz Complete! You can now view your hobby match.");
    }
  };

  const currentQuestion = quizData[current];

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">🎯 Discover Your Hobby!</h2>
      <div className="text-lg font-semibold mb-4 text-purple-700">
        {currentQuestion.question}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="flex items-center gap-3 bg-purple-50 hover:bg-purple-100 border rounded-lg p-4 transition"
          >
            <span className="text-xl text-purple-600">{option.icon}</span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HobbyQuiz;
