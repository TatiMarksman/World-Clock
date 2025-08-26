import { useEffect, useState } from "react";

export default function Watch({ id, city, timezone, onRemove }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  // Hocanın önerdiği doğru zaman hesaplama yöntemi
  // UTC'den hesaplama - çift sayma sorununu önler
  const h24 = (time.getUTCHours() + timezone + 24) % 24;
  const m = time.getUTCMinutes();
  const s = time.getUTCSeconds();

  const hours = h24 % 12;
  const minutes = m;
  const seconds = s;

  // Doğru açı hesaplamaları - 12 o'clock = 0 derece, saat yönünde
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
        {/* Saat işaretleri - sadece alt kısımda kesik çizgi */}
        <div
          style={{
            position: 'absolute',
            width: '20px',
            height: '2px',
            backgroundColor: '#333',
            left: '50%',
            bottom: '10px',
            transform: 'translateX(-50%)'
          }}
        />
        
        {/* Saat akrebi - kısa ve kalın */}
        <div
          style={{
            position: 'absolute',
            width: '4px',
            height: '20px',
            backgroundColor: '#333',
            left: '50%',
            top: '50%',
            transformOrigin: '50% 0',
            transform: `translateX(-50%) rotate(${hourAngle}deg)`
          }}
        />
        
        {/* Dakika akrebi - uzun ve ince */}
        <div
          style={{
            position: 'absolute',
            width: '2px',
            height: '30px',
            backgroundColor: '#333',
            left: '50%',
            top: '50%',
            transformOrigin: '50% 0',
            transform: `translateX(-50%) rotate(${minuteAngle}deg)`
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
            top: '50%',
            transformOrigin: '50% 0',
            transform: `translateX(-50%) rotate(${secondAngle}deg)`
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
      
      <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{city}</div>
      
      <button
        onClick={() => onRemove(id)}
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
