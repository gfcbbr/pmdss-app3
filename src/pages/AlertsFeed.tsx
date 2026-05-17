export function AlertsFeed() {
  const alerts = [
    { id: 1, machine: 'Konveyör D', message: 'Titreşim eşiği aşıldı', severity: 'Kritik', time: '5 dk önce' },
    { id: 2, machine: 'Dolum Makinesi A', message: 'Yağ sıcaklığı yüksek', severity: 'Uyarı', time: '23 dk önce' },
    { id: 3, machine: 'Etiketleme B', message: 'Bakım zamanı yaklaşıyor', severity: 'Bilgi', time: '1 saat önce' },
    { id: 4, machine: 'Paketleme C', message: 'Motor akımı anormal', severity: 'Uyarı', time: '2 saat önce' },
    { id: 5, machine: 'Kompresör E', message: 'Rutin kontrol tamamlandı', severity: 'Bilgi', time: '3 saat önce' },
  ];

  const severityStyle: Record<string, { bg: string; color: string }> = {
    'Kritik': { bg: '#FEF2F2', color: '#EF4444' },
    'Uyarı': { bg: '#FFFBEB', color: '#F59E0B' },
    'Bilgi': { bg: '#EFF6FF', color: '#3B82F6' },
  };

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Uyarılar</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {alerts.map(a => {
          const style = severityStyle[a.severity];
          return (
            <div key={a.id} style={{ background: '#fff', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ background: style.bg, color: style.color, padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold' }}>{a.severity}</span>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '14px' }}>{a.machine}</p>
                  <p style={{ color: '#64748B', fontSize: '13px' }}>{a.message}</p>
                </div>
              </div>
              <span style={{ color: '#94A3B8', fontSize: '12px' }}>{a.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
