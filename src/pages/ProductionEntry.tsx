import { useState } from 'react';

export function ProductionEntry() {
  const [form, setForm] = useState({ machine: '', hours: '', output: '', notes: '' });
  const [saved, setSaved] = useState(false);

  const handleSubmit = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Üretim Verisi Girişi</h1>
      <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        {[
          { label: 'Makine', key: 'machine', placeholder: 'Dolum Makinesi A' },
          { label: 'Çalışma Saati', key: 'hours', placeholder: '8' },
          { label: 'Üretim Miktarı', key: 'output', placeholder: '1200' },
          { label: 'Notlar', key: 'notes', placeholder: 'Varsa açıklama...' },
        ].map(field => (
          <div key={field.key} style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', color: '#64748B', marginBottom: '4px' }}>{field.label}</label>
            <input
              value={form[field.key as keyof typeof form]}
              onChange={e => setForm({ ...form, [field.key]: e.target.value })}
              placeholder={field.placeholder}
              style={{ width: '100%', padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px' }}
            />
          </div>
        ))}
        {saved && <p style={{ color: '#22C55E', marginBottom: '12px' }}>✅ Kaydedildi!</p>}
        <button onClick={handleSubmit} style={{ padding: '12px 24px', background: '#3B82F6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Kaydet
        </button>
      </div>
    </div>
  );
}
