/* Crea els tests corresponents per verificar el funcionament 
de l'exercici Async / Await Nivell 2 - Exercici 1 
Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 
utilitzant Jest Fake Timers
*/

const {doble, sumaDobles} = require('../app/asyncAwaitN2E1');

// jest.useFakeTimers(); no aconseguixo que em funcioni.

describe('El número introduir ha de donar el doble del seu valor', () => {
    test('El doble de 2 es igual a 4',async () => {
        const operacioDoble = await doble(2);
        expect(operacioDoble).toBe(4);
    });
});

describe('Ha de rebre tres números, calcular el doble de cadascun i sumarlos',() => {
    test('La suma del doble de: 2, 3, 4 es igual a 18', async () => {
        const dobles = await sumaDobles(2,3,4);
        expect(dobles).toBe(18);
    });
});
jest.setTimeout(12000); //es cutre ho se, però no he pogut fer-ho amb jest.useFakeTimers()