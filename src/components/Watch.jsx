import { useEffect, useState } from "react";

export default function Watch({ city, timezone, onRemove }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  const localTime = new Date(
    time.getTime() + timezone * 60 * 60 * 1000
  );

  return (
    <div className="p-4 border rounded-lg shadow-md flex justify-between items-center mb-2">
      <div>
        <h2 className="text-lg font-semibold">{city}</h2>
        <p className="text-gray-600">{localTime.toLocaleTimeString()}</p>
      </div>
      <button
        onClick={() => onRemove(city)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        ✕
      </button>
    </div>
  );
}
