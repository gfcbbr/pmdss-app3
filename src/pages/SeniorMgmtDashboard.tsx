export function SeniorMgmtDashboard() {
  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Üst Yönetim Paneli</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          { label: 'OEE Oranı', value: '%87', color: '#22C55E' },
          { label: 'Bakım Maliyeti', value: '₺124K', color: '#F59E0B' },
          { label: 'Duruş Süresi', value: '14 saat', color: '#EF4444' },
        ].map(kpi => (
          <div key={kpi.label} style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ color: '#64748B', fontSize: '14px' }}>{kpi.label}</p>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: kpi.color }}>{kpi.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
