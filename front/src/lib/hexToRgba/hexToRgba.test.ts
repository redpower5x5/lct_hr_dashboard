import { hexToRgba } from './hexToRgba';

describe('Hex to RGBA', () => {
  test('White hex #000000 with 1 opacity to rgba', () => {
    expect(hexToRgba('#000000', 1)).toBe('rgba(0, 0, 0, 1)');
  });

  test('White hex #ffffff with .5 opacity to rgba', () => {
    expect(hexToRgba('#ffffff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
  });
});
