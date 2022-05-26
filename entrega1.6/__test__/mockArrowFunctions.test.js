// Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

const { Persona } = require("../__mocks__/mockArrowFunctions");

jest.fn("../__mocks__/mockArrowFunctions");

test('Cridem al constructor i al mètode', () =>{
    const people = new Persona('Luke');
    expect(people).toBeInstanceOf(Persona);
    expect(people.nom).toBe('Luke');
    expect(people.dirNom()).toBe('Leia')
});