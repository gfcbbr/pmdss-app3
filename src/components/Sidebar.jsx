import { useAuth } from '../contexts/AuthContext';

const menuItems = {
  'Production Manager': [
    { path: '/dashboard', label: '📊 Dashboard' },
    { path: '/production-entry', label: '➕ Üretim Girişi' },
    { path: '/plans', label: '📅 Bakım Planları' },
    { path: '/alerts', label: '🔔 Uyarılar' },
    { path: '/reports', label: '📈 Raporlar' },
  ],
  'Maintenance Technician': [
    { path: '/workorders', label: '🔧 İş Emirlerim' },
    { path: '/alerts', label: '🔔 Uyarılar' },
  ],
  'Maintenance Manager': [
    { path: '/mm-dashboard', label: '📊 Dashboard' },
    { path: '/work-orders', label: '📋 İş Emirleri' },
    { path: '/fleet', label: '🏭 Ekipman' },
    { path: '/alerts', label: '🔔 Uyarılar' },
    { path: '/reports', label: '📈 Raporlar' },
  ],
  'Senior Management': [
    { path: '/executive', label: '📊 Yönetim Paneli' },
    { path: '/fleet', label: '🏭 Ekipman' },
    { path: '/reports', label: '📈 Raporlar' },
  ],
  'Admin': [
    { path: '/users', label: '👥 Kullanıcılar' },
    { path: '/settings', label: '⚙️ Ayarlar' },
    { path: '/dashboard', label: '📊 Dashboard' },
    { path: '/alerts', label: '🔔 Uyarılar' },
  ],
};

export function Sidebar() {
  const { user, logout } = useAuth();
  const items = menuItems[user?.role] || [];

  return (
    <div style={{ padding: '24px 16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>PM-DSS</h2>
        <p style={{ color: '#64748B', fontSize: '12px' }}>Predictive Maintenance</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <p style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '4px' }}>{user?.name}</p>
        <p style={{ color: '#64748B', fontSize: '11px' }}>{user?.role}</p>
      </div>

      <nav style={{ flex: 1 }}>
        {items.map(item => (
          <a
            key={item.path}
            href={`#${item.path}`}
            onClick={e => { e.preventDefault(); window.history.pushState({}, '', item.path); window.dispatchEvent(new PopStateEvent('popstate')); }}
            style={{ display: 'block', padding: '10px 12px', color: '#CBD5E1', textDecoration: 'none', borderRadius: '8px', marginBottom: '4px', fontSize: '14px' }}
            onMouseOver={e => e.currentTarget.style.background = '#1E293B'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={logout}
        style={{ padding: '10px', background: '#DC2626', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}
      >
        🚪 Çıkış
      </button>
    </div>
  );
}
