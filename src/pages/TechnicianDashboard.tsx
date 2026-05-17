export function TechnicianDashboard() {
  const workOrders = [
    { id: 'WO-001', machine: 'Dolum Makinesi A', task: 'Rulman değişimi', priority: 'Yüksek', status: 'Bekliyor' },
    { id: 'WO-002', machine: 'Etiketleme B', task: 'Yağlama', priority: 'Normal', status: 'Devam Ediyor' },
    { id: 'WO-003', machine: 'Paketleme C', task: 'Filtre temizliği', priority: 'Düşük', status: 'Bekliyor' },
  ];

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>İş Emirlerim</h1>
      <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC' }}>
              {['ID', 'Makine', 'Görev', 'Öncelik', 'Durum'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#64748B' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workOrders.map(wo => (
              <tr key={wo.id} style={{ borderTop: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#3B82F6' }}>{wo.id}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{wo.machine}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{wo.task}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{wo.priority}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>{wo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
