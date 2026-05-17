export function MaintenancePlans() {
  const plans = [
    { machine: 'Dolum Makinesi A', type: 'Önleyici', interval: '30 gün', nextDate: '2026-06-01', status: 'Planlandı' },
    { machine: 'Etiketleme B', type: 'Prediktif', interval: '15 gün', nextDate: '2026-05-25', status: 'Yaklaşıyor' },
    { machine: 'Paketleme C', type: 'Önleyici', interval: '60 gün', nextDate: '2026-07-10', status: 'Planlandı' },
    { machine: 'Konveyör D', type: 'Prediktif', interval: '7 gün', nextDate: '2026-05-20', status: 'Acil' },
  ];

  const statusColor: Record<string, string> = {
    'Planlandı': '#22C55E',
    'Yaklaşıyor': '#F59E0B',
    'Acil': '#EF4444',
  };

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Bakım Planları</h1>
      <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC' }}>
              {['Makine', 'Bakım Türü', 'Periyot', 'Sonraki Tarih', 'Durum'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#64748B' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans.map(p => (
              <tr key={p.machine} style={{ borderTop: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{p.machine}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{p.type}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{p.interval}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{p.nextDate}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: statusColor[p.status] || '#64748B', fontWeight: 'bold' }}>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
