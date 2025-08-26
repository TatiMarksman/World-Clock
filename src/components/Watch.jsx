import { useEffect, useState } from "react";

export default function Watch({ id, city, timezone, onRemove }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  // UTC hesaplama - hocanın önerdiği yöntem
  const utcMs = time.getTime() + time.getTimezoneOffset() * 60000;
  const shifted = new Date(utcMs + timezone * 3600000);

  const h24 = shifted.getUTCHours();
  const m = shifted.getUTCMinutes();
  const s = shifted.getUTCSeconds();

  const hourAngle = (h24 % 12) * 30 + m * 0.5;
  const minuteAngle = m * 6;
  const secondAngle = s * 6;

  return (
    <div className="watch">
      <h3>{city}</h3>
      <div className="clock">
        <div
          className="hand hour"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
      </div>
      <button onClick={() => onRemove(id)}>Close</button>
    </div>
  );
}
