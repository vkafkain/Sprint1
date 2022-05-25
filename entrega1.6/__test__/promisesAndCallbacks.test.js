/* Crea els tests corresponents per verificar el funcionament de l'exercici 
Promises & Callbacks Nivell 2 - Exercici 3
 */

const {getEmployee, getSalary} = require('../app/promisesAndCallbacks');

describe(`Cridem a la funció getEmployee i aquesta crida a getSalary anidan les dues promeses`,() => {
    test(`Ha de retornar el nom i el salari del empleat buscat amb el id 3`, async () => {
        const employee = await getEmployee(3);
        expect(employee.name).toBe(`Jeff Bezos`);
    });
});
    test('Ens ha de donar els salari del id 3', async () => {
        const employee = await getEmployee(3);
        const salari = await getSalary(employee);
        expect(salari).toBe(2000);
    });