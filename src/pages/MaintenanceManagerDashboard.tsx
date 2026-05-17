export function MaintenanceManagerDashboard() {
  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Bakım Yöneticisi Paneli</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          { label: 'Açık İş Emri', value: '8', color: '#3B82F6' },
          { label: 'Tamamlanan', value: '42', color: '#22C55E' },
          { label: 'Geciken', value: '2', color: '#EF4444' },
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
