import React from 'react';
export const ThemedText = ({ type = 'default', style, children }) => {
  const base = { margin: 0, color: '#333' };
  const variants = {
    title: { fontSize: 24, fontWeight: '700' },
    subtitle: { fontSize: 18, fontWeight: '600' },
    defaultSemiBold: { fontSize: 16, fontWeight: '600' },
    default: { fontSize: 16, fontWeight: '400' },
  };
  return (
    <p style={{ ...base, ...(variants[type] || variants.default), ...style }}>
      {children}
    </p>
  );
};