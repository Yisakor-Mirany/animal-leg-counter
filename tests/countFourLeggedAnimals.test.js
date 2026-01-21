const countFourLeggedAnimals = require('../src/countFourLeggedAnimals');


describe('Normal Cases', () => {
  test('mixed animals', () => {
    expect(
      countFourLeggedAnimals(['lion', 'monkey', 'deer', 'snake', 'elephant'])
    ).toBe(3);
  });

  test('single four-legged animal', () => {
    expect(
      countFourLeggedAnimals(['frog', 'horse', 'spider', 'ant'])
    ).toBe(1);
  });

  test('all four-legged animals', () => {
    expect(
      countFourLeggedAnimals(['dog', 'cat', 'horse'])
    ).toBe(3);
  });
});

describe('Edge Cases', () => {
  test('empty array', () => {
    expect(countFourLeggedAnimals([])).toBe(0);
  });

  test('unknown animals only', () => {
    expect(
      countFourLeggedAnimals(['dragon', 'unicorn'])
    ).toBe(0);
  });

  test('no four-legged animals', () => {
    expect(
      countFourLeggedAnimals(['snake', 'worm', 'ant'])
    ).toBe(0);
  });
});
