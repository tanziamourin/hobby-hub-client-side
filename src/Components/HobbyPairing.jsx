const pairings = [
  {
    hobby1: { icon: '📷', name: 'Photography' },
    hobby2: { icon: '🚶‍♂️', name: 'Hiking' },
    tip: 'Take your camera on hikes and capture beautiful landscapes.',
  },
  {
    hobby1: { icon: '📖', name: 'Reading' },
    hobby2: { icon: '✍️', name: 'Creative Writing' },
    tip: 'Read inspiring stories and write your own adventures.',
  },
  {
    hobby1: { icon: '🎮', name: 'Gaming' },
    hobby2: { icon: '🎥', name: 'Content Creation' },
    tip: 'Record and share your gameplay with others.',
  },
];

const HobbyPairing = () => {
  return (
    <section className="max-w-5xl mx-auto my-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">🎯 Hobby Pairing Ideas</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pairings.map((pair, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">
              {pair.hobby1.icon} + {pair.hobby2.icon}
            </div>
            <h3 className="text-xl font-semibold mb-1">
              {pair.hobby1.name} & {pair.hobby2.name}
            </h3>
            <p className="text-gray-600 text-sm">{pair.tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbyPairing;
