import { useState } from "react";

function App() {
  const [color, setColor] = useState('green');

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center duration-500 transition-colors ease-in-out" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center gap-6 shadow-xl bg-white px-5 py-4 rounded-3xl animate-fadeIn">
        <button
          style={{ backgroundColor: 'red' }}
          onClick={() => setColor('red')}
          className="outline-none px-6 py-2 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110 hover:bg-red-600"
        >
          Red
        </button>
        <button
          style={{ backgroundColor: 'blue' }}
          onClick={() => setColor('blue')}
          className="outline-none px-6 py-2 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600"
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: 'pink' }}
          onClick={() => setColor('pink')}
          className="outline-none px-6 py-2 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600"
        >
          Pink
        </button>
        <button
          style={{ backgroundColor: 'green' }}
          onClick={refreshPage}
          className="outline-none px-6 py-2 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110 hover:bg-green-600"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
