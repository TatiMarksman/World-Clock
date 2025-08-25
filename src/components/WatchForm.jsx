import { useState } from "react";

export default function WatchForm({ onAdd }) {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || !timezone) return;
    onAdd(city, Number(timezone));
    setCity("");
    setTimezone("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', flex: 1 }}
      />
      <input
        type="number"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        placeholder="Timezone offset"
        style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '120px' }}
      />
      <button type="submit" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none' }}>
        Add
      </button>
    </form>
  );
}
