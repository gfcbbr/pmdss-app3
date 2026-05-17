interface KpiCardProps {
  label: string;
  value: string | number;
  color?: string;
}

export function KpiCard({ label, value, color = '#3B82F6' }: KpiCardProps) {
  return (
    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '8px' }}>{label}</p>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color }}>{value}</p>
    </div>
  );
}
