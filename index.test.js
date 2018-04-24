const getSafe = require('./index');

const duckling = { color: 'white' };

it('returns the correct value', () => {
    expect(() => duckling.mother.age).toThrow();
    expect(getSafe(() => duckling.mother.age)).toBeUndefined();
    expect(getSafe(() => duckling.mother.age, 4)).toBe(4);
});