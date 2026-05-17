interface StatusBadgeProps {
  status: string;
}

const statusStyles: Record<string, { bg: string; color: string }> = {
  'Aktif':         { bg: '#F0FDF4', color: '#22C55E' },
  'Çalışıyor':     { bg: '#F0FDF4', color: '#22C55E' },
  'Tamamlandı':    { bg: '#F0FDF4', color: '#22C55E' },
  'Bakımda':       { bg: '#FFFBEB', color: '#F59E0B' },
  'Bekliyor':      { bg: '#FFFBEB', color: '#F59E0B' },
  'Yaklaşıyor':    { bg: '#FFFBEB', color: '#F59E0B' },
  'Arızalı':       { bg: '#FEF2F2', color: '#EF4444' },
  'Acil':          { bg: '#FEF2F2', color: '#EF4444' },
  'Geciken':       { bg: '#FEF2F2', color: '#EF4444' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status] || { bg: '#F1F5F9', color: '#64748B' };
  return (
    <span style={{ background: style.bg, color: style.color, padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold' }}>
      {status}
    </span>
  );
}
