
const {sumar, restar, multiplicar, dividir} = require('../app/operacions');


describe('Operaciones matemáticas', () => {
    
    test('sumar 1 + 1 és igual a 2', () => {
        expect(sumar(1, 1)).toBe(2);
    });
    test('restar 1 - 1 és igual a 0', () => {
        expect(restar(1, 1)).toBe(0);
    });
    test('multiplicar 1 * 1 és igual a 1', () => {
        expect(multiplicar(1, 1)).toBe(1);
    });
    test('dividir 1 / 1 és igual a 1', () => {
        expect(dividir(1, 1)).toBe(1);
    });
});