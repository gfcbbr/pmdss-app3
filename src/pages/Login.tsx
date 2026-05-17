import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const USERS = [
  { id: 1, name: 'Ali Yılmaz', role: 'Production Manager', password: '1234' },
  { id: 2, name: 'Mehmet Demir', role: 'Maintenance Technician', password: '1234' },
  { id: 3, name: 'Ayşe Kaya', role: 'Maintenance Manager', password: '1234' },
  { id: 4, name: 'Fatma Şahin', role: 'Senior Management', password: '1234' },
  { id: 5, name: 'Admin User', role: 'Admin', password: '1234' },
];

export function Login() {
  const { login } = useAuth();
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = USERS.find(u => u.name === selectedUser && u.password === password);
    if (user) {
      login(user);
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#1E293B', padding: '40px', borderRadius: '12px', width: '360px' }}>
        <h1 style={{ color: '#fff', fontSize: '24px', marginBottom: '8px' }}>PM-DSS</h1>
        <p style={{ color: '#94A3B8', marginBottom: '24px' }}>Predictive Maintenance DSS</p>

        <label style={{ color: '#94A3B8', fontSize: '14px' }}>Kullanıcı</label>
        <select
          value={selectedUser}
          onChange={e => setSelectedUser(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '16px', marginTop: '4px', borderRadius: '8px', background: '#0F172A', color: '#fff', border: '1px solid #334155' }}
        >
          <option value="">Seçin...</option>
          {USERS.map(u => <option key={u.id} value={u.name}>{u.name} ({u.role})</option>)}
        </select>

        <label style={{ color: '#94A3B8', fontSize: '14px' }}>Şifre</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="1234"
          style={{ width: '100%', padding: '10px', marginBottom: '16px', marginTop: '4px', borderRadius: '8px', background: '#0F172A', color: '#fff', border: '1px solid #334155' }}
        />

        {error && <p style={{ color: '#F87171', marginBottom: '12px', fontSize: '14px' }}>{error}</p>}

        <button
          onClick={handleLogin}
          style={{ width: '100%', padding: '12px', background: '#3B82F6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}
