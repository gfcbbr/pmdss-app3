export function FleetOverviewPage() {
  const machines = [
    { id: 'M-001', name: 'Dolum Makinesi A', location: 'Hat 1', status: 'Çalışıyor', health: 92, lastMaintenance: '2026-04-15' },
    { id: 'M-002', name: 'Etiketleme B', location: 'Hat 1', status: 'Çalışıyor', health: 78, lastMaintenance: '2026-04-20' },
    { id: 'M-003', name: 'Paketleme C', location: 'Hat 2', status: 'Bakımda', health: 45, lastMaintenance: '2026-05-10' },
    { id: 'M-004', name: 'Konveyör D', location: 'Hat 2', status: 'Arızalı', health: 20, lastMaintenance: '2026-03-01' },
    { id: 'M-005', name: 'Kompresör E', location: 'Teknik', status: 'Çalışıyor', health: 88, lastMaintenance: '2026-05-01' },
  ];

  const statusColor: Record<string, string> = {
    'Çalışıyor': '#22C55E',
    'Bakımda': '#F59E0B',
    'Arızalı': '#EF4444',
  };

  const healthColor = (h: number) => h > 75 ? '#22C55E' : h > 50 ? '#F59E0B' : '#EF4444';

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Ekipman Filosu</h1>
      <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC' }}>
              {['ID', 'Makine', 'Lokasyon', 'Durum', 'Sağlık', 'Son Bakım'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#64748B' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {machines.map(m => (
              <tr key={m.id} style={{ borderTop: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#3B82F6' }}>{m.id}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{m.name}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#64748B' }}>{m.location}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: statusColor[m.status], fontWeight: 'bold' }}>{m.status}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '3px' }}>
                      <div style={{ width: `${m.health}%`, height: '100%', background: healthColor(m.health), borderRadius: '3px' }} />
                    </div>
                    <span style={{ color: healthColor(m.health), fontWeight: 'bold', fontSize: '13px' }}>{m.health}%</span>
                  </div>
                </td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#64748B' }}>{m.lastMaintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
