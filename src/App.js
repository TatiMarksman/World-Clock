import { useState } from "react";
import WatchForm from "./components/WatchForm";
import WatchList from "./components/WatchList";

function App() {
  const [watches, setWatches] = useState([]);

  const addWatch = (city, timezone) => {
    const newWatch = {
      id: Date.now(), // benzersiz id
      city,
      timezone: Number(timezone),
    };
    setWatches([...watches, newWatch]);
  };

  const removeWatch = (id) => {
    setWatches(watches.filter((watch) => watch.id !== id));
  };

  return (
    <div className="app">
      <WatchForm onAdd={addWatch} />
      <div className="watches">
        {watches.map((watch) => (
          <WatchList
            key={watch.id}
            watches={[watch]}
            onRemove={removeWatch}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
