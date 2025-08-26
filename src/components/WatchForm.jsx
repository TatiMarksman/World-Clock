import { useState } from "react";

export default function WatchForm({ onAdd }) {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || timezone === "") return; // timezone 0 değerini de kabul etmek için
    onAdd(city, Number(timezone));
    setCity("");
    setTimezone("");
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>World Clock</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Название</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            style={{ 
              width: '100%', 
              border: '1px solid #ccc', 
              padding: '8px', 
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Временная зона</label>
          <input
            type="number"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            placeholder="Timezone offset"
            style={{ 
              width: '100%', 
              border: '1px solid #ccc', 
              padding: '8px', 
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            padding: '10px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
