export const getHexOpacity = (hex: string, opacity: number): string => {
  const a = Math.min(1, Math.max(0, opacity));
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);

  return `rgba(${r},${g},${b},${a})`;
};
