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

  const hours = localTime.getHours() % 12;
  const minutes = localTime.getMinutes();
  const seconds = localTime.getSeconds();

  // Açı hesaplamalarını düzeltiyorum
  const hourAngle = (hours * 30) + (minutes * 0.5); // Saat başına 30 derece + dakika başına 0.5 derece
  const minuteAngle = minutes * 6; // Dakika başına 6 derece
  const secondAngle = seconds * 6; // Saniye başına 6 derece

  return (
    <div style={{ 
      display: 'inline-block', 
      margin: '20px', 
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{ 
        width: '120px', 
        height: '120px', 
        border: '2px solid #333', 
        borderRadius: '50%', 
        position: 'relative',
        backgroundColor: 'white'
      }}>
        {/* Saat işaretleri */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            style={{
              position: 'absolute',
              width: '2px',
              height: '8px',
              backgroundColor: '#333',
              left: '50%',
              top: '8px',
              transformOrigin: '50% 52px',
              transform: `rotate(${num * 30}deg) translateX(-50%)`
            }}
          />
        ))}
        
        {/* Saat akrebi - daha kısa ve kalın */}
        <div
          style={{
            position: 'absolute',
            width: '4px',
            height: '18px',
            backgroundColor: '#333',
            left: '50%',
            top: '42px',
            transformOrigin: '50% 0',
            transform: `rotate(${hourAngle}deg) translateX(-50%)`
          }}
        />
        
        {/* Dakika akrebi - daha uzun ve ince */}
        <div
          style={{
            position: 'absolute',
            width: '2px',
            height: '28px',
            backgroundColor: '#333',
            left: '50%',
            top: '32px',
            transformOrigin: '50% 0',
            transform: `rotate(${minuteAngle}deg) translateX(-50%)`
          }}
        />
        
        {/* Saniye akrebi - en uzun ve kırmızı */}
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: '32px',
            backgroundColor: '#f00',
            left: '50%',
            top: '28px',
            transformOrigin: '50% 0',
            transform: `rotate(${secondAngle}deg) translateX(-50%)`
          }}
        />
        
        {/* Merkez nokta */}
        <div
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            backgroundColor: '#333',
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      <div style={{ marginTop: '8px', fontWeight: 'bold', textTransform: 'lowercase' }}>{city}</div>
      
      <button
        onClick={() => onRemove(city)}
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          fontSize: '12px',
          cursor: 'pointer'
        }}
      >
        ✕
      </button>
    </div>
  );
}
