import { useState } from "react";

export default function WatchForm({ onAdd }) {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // UTC 0 için kontrol düzeltildi
    if (city.trim() === "" || timezone === "" || isNaN(Number(timezone))) return;
    onAdd(city, timezone);
    setCity("");
    setTimezone("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>World Clock</h1>
      <input
        type="text"
        placeholder="Название"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Временная зона"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
