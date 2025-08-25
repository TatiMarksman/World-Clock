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
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>World Clock</h1>
      <WatchForm onAdd={handleAdd} />
      <WatchList watches={watches} onRemove={handleRemove} />
    </div>
  );
}

export default App;
