export function ReportsPage() {
  const reports = [
    { title: 'Mayıs 2026 Bakım Raporu', type: 'Aylık', date: '2026-05-01', status: 'Hazır' },
    { title: 'Q1 2026 OEE Analizi', type: 'Çeyreklik', date: '2026-04-01', status: 'Hazır' },
    { title: 'Arıza Maliyet Raporu', type: 'Haftalık', date: '2026-05-13', status: 'Hazır' },
    { title: 'Prediktif Bakım Başarı Oranı', type: 'Aylık', date: '2026-05-01', status: 'Hazır' },
  ];

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Raporlar</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {reports.map(r => (
          <div key={r.title} style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ background: '#EFF6FF', color: '#3B82F6', padding: '2px 8px', borderRadius: '999px', fontSize: '12px' }}>{r.type}</span>
              <span style={{ color: '#22C55E', fontSize: '12px', fontWeight: 'bold' }}>{r.status}</span>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{r.title}</h3>
            <p style={{ color: '#64748B', fontSize: '13px', marginBottom: '16px' }}>{r.date}</p>
            <button style={{ padding: '8px 16px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>
              📥 İndir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
