import { useState } from 'react';

export function UserManagement() {
  const [users] = useState([
    { id: 1, name: 'Ali Yılmaz', role: 'Production Manager', email: 'ali@pmdss.com', status: 'Aktif' },
    { id: 2, name: 'Mehmet Demir', role: 'Maintenance Technician', email: 'mehmet@pmdss.com', status: 'Aktif' },
    { id: 3, name: 'Ayşe Kaya', role: 'Maintenance Manager', email: 'ayse@pmdss.com', status: 'Aktif' },
    { id: 4, name: 'Fatma Şahin', role: 'Senior Management', email: 'fatma@pmdss.com', status: 'Aktif' },
    { id: 5, name: 'Admin User', role: 'Admin', email: 'admin@pmdss.com', status: 'Aktif' },
  ]);

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Kullanıcı Yönetimi</h1>
      <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC' }}>
              {['Ad Soyad', 'Rol', 'E-posta', 'Durum'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#64748B' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} style={{ borderTop: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '500' }}>{u.name}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#3B82F6' }}>{u.role}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#64748B' }}>{u.email}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                  <span style={{ background: '#F0FDF4', color: '#22C55E', padding: '2px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold' }}>{u.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
