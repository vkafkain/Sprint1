/*Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON.
Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
L'exercici refet està a /__mocks__/asyncJson.js, ara l'arxiu agafa les dades d'un arxiu JSON amb el nom employeesSalaries.json,
és el mateix arxiu que requereix el exercici d'aquest arxiu.
*/

//Requerim el JSON

const {employees, salaries} = require('../employeesSalaries.json');

//Fem mock del arxiu JSON amb cru.

describe('Importem JSON per fer testing', () => {
    test('Fem comprovacions dels employees del JSON', () => {
        expect(employees).toHaveLength(3);
        expect(employees.map((employees) => employees.name)).toEqual([
            'Linux Torvalds',
            'Bill Gates',
            'Jeff Bezos',
        ]);
    });
    for(let i = 0; i < employees.length; i++) {
        test('Employees haria de tenir las propietat, id i name', () => {
            expect(employees[i]).toHaveProperty('id');
            expect(employees[i]).toHaveProperty('name');
    });
    }
    test('Fem comprovacions dels salaries del JSON', () => {
        expect(salaries).toHaveLength(3);
        expect(salaries.map((salaries) => salaries.salary)).toEqual([
            4000,
            1000,
            2000,
        ]);
    });
    for(let i = 0; i < salaries.length; i++) {
        test('Salaries haria de tenir las propietat, id i salary', () => {
            expect(salaries[i]).toHaveProperty('id');
            expect(salaries[i]).toHaveProperty('salary');
        });
    }
});



