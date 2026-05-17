export function SettingsPage() {
  return (
    <div style={{ padding: '32px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Ayarlar</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { title: 'Sistem Adı', value: 'PM-DSS v1.0' },
          { title: 'Şirket', value: 'FMCG Üretim A.Ş.' },
          { title: 'Bildirim E-postası', value: 'admin@pmdss.com' },
          { title: 'Uyarı Eşiği', value: '%75 sağlık skoru' },
          { title: 'Veri Güncelleme Sıklığı', value: 'Her 5 dakika' },
        ].map(s => (
          <div key={s.title} style={{ background: '#fff', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#64748B' }}>{s.title}</span>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
