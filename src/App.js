import { useState } from "react";
import WatchForm from "./components/WatchForm";
import WatchList from "./components/WatchList";

function App() {
  const [watches, setWatches] = useState([]);

  const handleAdd = (city, timezone) => {
    setWatches([...watches, { city, timezone }]);
  };

  const handleRemove = (city) => {
    setWatches(watches.filter((w) => w.city !== city));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">World Clock</h1>
      <WatchForm onAdd={handleAdd} />
      <WatchList watches={watches} onRemove={handleRemove} />
    </div>
  );
}

export default App;
