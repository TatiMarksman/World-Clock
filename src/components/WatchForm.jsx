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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        placeholder="Timezone offset"
        className="border p-2 rounded w-32"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
