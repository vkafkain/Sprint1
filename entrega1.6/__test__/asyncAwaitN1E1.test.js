/* 
Crea els tests corresponents per verificar el 
funcionament de l'exercici Async / Await Nivell 1 - Exercici 1 */

const {getEmployee, getSalary, funcioAsincrona} = require('../app/asyncAwaitN1E1');

describe('cerca del empleat per id', () => {
    test (`Ha de trobar l'objecte del Bill Gates`, async () => {
        const employee = await getEmployee(2);
        expect(employee).toStrictEqual({id: 2, name: 'Bill Gates'}); //al ser un objecte amb toBe sempre dona error.
    });
});

describe('busquem el salari rebent per parametre el objecte employee', () => {
    test (`Ha de trobar el salari del Bill Gates`, async () => {
        const empleat = await getEmployee(2)
        const salari = await getSalary(empleat);
        expect(salari).toBe(1000);
    });
});

describe('busquem imprimir el nom del empleat i el seu salari', () => {
    test ('Ha de imprimir nom i salari', async () => {
        const asincrona = await funcioAsincrona(2);
        const empleat = await getEmployee(2);
        const salari = await getSalary(empleat)
        expect(asincrona).toBe(`treballador: ${empleat}, sou: ${salari}`)
    });
});



