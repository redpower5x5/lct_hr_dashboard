export const hexToRgba = (hex: string, a: number) => {
  if (a < 0 || a > 1) {
    throw new Error('A must be from 0 to 1');
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${a})`
    : null;
};
