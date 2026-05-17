export function WorkOrdersPage() {
  const orders = [
    { id: 'WO-001', machine: 'Dolum Makinesi A', technician: 'Mehmet Demir', priority: 'Yüksek', status: 'Bekliyor', date: '2026-05-17' },
    { id: 'WO-002', machine: 'Etiketleme B', technician: 'Ahmet Can', priority: 'Normal', status: 'Devam Ediyor', date: '2026-05-16' },
    { id: 'WO-003', machine: 'Paketleme C', technician: 'Mehmet Demir', priority: 'Düşük', status: 'Tamamlandı', date: '2026-05-15' },
    { id: 'WO-004', machine: 'Konveyör D', technician: 'Ahmet Can', priority: 'Yüksek', status: 'Bekliyor', date: '2026-05-17' },
  ];

  const statusColor: Record<string, string> = {
    'Bekliyor': '#F59E0B',
    'Devam Ediyor': '#3B82F6',
    'Tamamlandı': '#22C55E',
  };

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>İş Emirleri</h1>
      <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC' }}>
              {['ID', 'Makine', 'Teknisyen', 'Öncelik', 'Durum', 'Tarih'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#64748B' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} style={{ borderTop: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#3B82F6' }}>{o.id}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{o.machine}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{o.technician}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{o.priority}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: statusColor[o.status], fontWeight: 'bold' }}>{o.status}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#64748B' }}>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
