const objSafe = require('./index');

const duckling = {
    name: {
        current: 'Quackers'
    }
};


it('returns the correct value', () => {
    expect(() => duckling.mother.age).toThrow();
    expect(objSafe(() => duckling.name.maiden)).toBeUndefined();
    expect(objSafe(() => duckling.name.current, 'Arnold')).toBe('Quackers');
    expect(objSafe(() => duckling.feathers.color, 'white')).toBe('white');
});