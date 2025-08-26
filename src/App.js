import { useState, useEffect } from "react";
import WatchForm from "./components/WatchForm";
import WatchList from "./components/WatchList";

function App() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // CRUD işlemleri
  const API_URL = "http://localhost:7070/watches";

  // READ - Saatleri yükle
  const loadWatches = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch watches');
      }
      const data = await response.json();
      setWatches(data);
      setError(null);
    } catch (err) {
      setError('Failed to load watches');
      console.error('Error loading watches:', err);
    } finally {
      setLoading(false);
    }
  };

  // CREATE - Yeni saat ekle
  const handleAdd = async (city, timezone) => {
    try {
      const newWatch = { id: 0, city, timezone };
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWatch),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add watch');
      }
      
      // Listeyi yeniden yükle
      await loadWatches();
    } catch (err) {
      setError('Failed to add watch');
      console.error('Error adding watch:', err);
    }
  };

  // DELETE - Saat sil
  const handleRemove = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete watch');
      }
      
      // Listeyi yeniden yükle
      await loadWatches();
    } catch (err) {
      setError('Failed to delete watch');
      console.error('Error deleting watch:', err);
    }
  };

  // UPDATE - Saat güncelle
  const handleUpdate = async (id, city, timezone) => {
    try {
      const updatedWatch = { id, city, timezone };
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWatch),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update watch');
      }
      
      // Listeyi yeniden yükle
      await loadWatches();
    } catch (err) {
      setError('Failed to update watch');
      console.error('Error updating watch:', err);
    }
  };

  // İlk yükleme
  useEffect(() => {
    loadWatches();
  }, []);

  if (loading) {
    return <div style={{ padding: '24px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>World Clock</h1>
      
      {error && (
        <div style={{ 
          backgroundColor: '#fee', 
          color: '#c33', 
          padding: '12px', 
          borderRadius: '4px', 
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}
      
      <WatchForm onAdd={handleAdd} />
      
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button 
          onClick={loadWatches}
          style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🔄 Обновить
        </button>
      </div>
      
      <WatchList 
        watches={watches} 
        onRemove={handleRemove} 
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
