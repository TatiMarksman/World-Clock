import { useState } from "react";
import Watch from "./Watch";

export default function WatchList({ watches, onRemove, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editCity, setEditCity] = useState("");
  const [editTimezone, setEditTimezone] = useState("");

  const handleEdit = (watch) => {
    setEditingId(watch.id);
    setEditCity(watch.city);
    setEditTimezone(watch.timezone.toString());
  };

  const handleSave = () => {
    if (!editCity || editTimezone === "") return;
    
    onUpdate(editingId, editCity, Number(editTimezone));
    setEditingId(null);
    setEditCity("");
    setEditTimezone("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditCity("");
    setEditTimezone("");
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {watches.map((watch) => (
        <div key={watch.id} style={{ position: 'relative' }}>
          {editingId === watch.id ? (
            // Düzenleme modu
            <div style={{ 
              border: '2px solid #3b82f6', 
              borderRadius: '8px', 
              padding: '16px',
              backgroundColor: '#f8fafc'
            }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Название:</label>
                <input
                  type="text"
                  value={editCity}
                  onChange={(e) => setEditCity(e.target.value)}
                  style={{ 
                    width: '100%', 
                    border: '1px solid #ccc', 
                    padding: '6px', 
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Временная зона:</label>
                <input
                  type="number"
                  value={editTimezone}
                  onChange={(e) => setEditTimezone(e.target.value)}
                  style={{ 
                    width: '100%', 
                    border: '1px solid #ccc', 
                    padding: '6px', 
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={handleSave}
                  style={{ 
                    backgroundColor: '#10b981', 
                    color: 'white', 
                    padding: '6px 12px', 
                    borderRadius: '4px', 
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Сохранить
                </button>
                <button 
                  onClick={handleCancel}
                  style={{ 
                    backgroundColor: '#6b7280', 
                    color: 'white', 
                    padding: '6px 12px', 
                    borderRadius: '4px', 
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Отмена
                </button>
              </div>
            </div>
          ) : (
            // Normal görünüm
            <div style={{ position: 'relative' }}>
              <Watch
                id={watch.id}
                city={watch.city}
                timezone={watch.timezone}
                onRemove={onRemove}
              />
              <button
                onClick={() => handleEdit(watch)}
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                ✎
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
