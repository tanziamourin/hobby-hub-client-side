import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const hobbySuggestions = {
  January: { icon: "🧘", hobby: "Try Yoga for inner peace" },
  February: { icon: "🎨", hobby: "Explore abstract painting" },
  March: { icon: "📸", hobby: "Capture nature through photography" },
  April: { icon: "🌿", hobby: "Start a mini herb garden" },
  May: { icon: "🎶", hobby: "Make a relaxing music playlist" },
  June: { icon: "📚", hobby: "Read a new genre of books" },
  July: { icon: "🚴", hobby: "Go on a biking adventure" },
  August: { icon: "🍳", hobby: "Experiment with baking" },
  September: { icon: "🎮", hobby: "Try a new indie game" },
  October: { icon: "🧩", hobby: "Solve complex puzzles" },
  November: { icon: "📝", hobby: "Start daily journaling" },
  December: { icon: "❄️", hobby: "Craft winter DIY decor" },
};

const monthBackgrounds = {
  January: "from-blue-100 to-purple-200",
  February: "from-pink-100 to-red-200",
  March: "from-green-100 to-blue-200",
  April: "from-lime-100 to-green-200",
  May: "from-yellow-100 to-amber-200",
  June: "from-orange-100 to-yellow-200",
  July: "from-sky-100 to-blue-300",
  August: "from-red-100 to-pink-200",
  September: "from-emerald-100 to-teal-200",
  October: "from-indigo-100 to-purple-200",
  November: "from-stone-100 to-zinc-200",
  December: "from-cyan-100 to-blue-200",
};

const HobbyHoroscope = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  useEffect(() => {
    const savedMonth = localStorage.getItem("hobby_horoscope_month");
    if (savedMonth && hobbySuggestions[savedMonth]) {
      setSelectedMonth(savedMonth);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hobby_horoscope_month", selectedMonth);
  }, [selectedMonth]);

  const { icon, hobby } = hobbySuggestions[selectedMonth];
  const backgroundClass =
    monthBackgrounds[selectedMonth] || "from-indigo-100 to-pink-100";

  return (
    <section
      className={`relative max-w-xl mx-auto my-15 p-6 rounded-2xl bg-gradient-to-br ${backgroundClass} shadow-lg text-center text-black min-h-[400px] overflow-hidden`}
    >
      {/* Lottie background animation */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/8155921c-92cb-4ada-9432-fb6fa335460d/HmaWBo8K8E.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Your Hobby Horoscope 🌟</h2>
        <div className="mb-10 text-center ">
          <div className=" mx-auto w-[10%] p-0.5 background rounded-full"></div>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="my-10 custom-input"
        >
          {Object.keys(hobbySuggestions).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <p className="text-lg mb-2">
          For the month of{" "}
          <span className="font-semibold">{selectedMonth}</span>:
        </p>
        <div className="text-5xl mb-4">{icon}</div>
        <p className="text-xl font-medium">{hobby}</p>

        <button
          onClick={() => setSelectedMonth(getRandomMonth())}
          className="mt-6 px-5 py-2 background text-white rounded-full transition duration-300"
        >
          Random Horoscope
        </button>
      </div>
    </section>
  );
};

const getRandomMonth = () => {
  const months = Object.keys(hobbySuggestions);
  return months[Math.floor(Math.random() * months.length)];
};

export default HobbyHoroscope;
