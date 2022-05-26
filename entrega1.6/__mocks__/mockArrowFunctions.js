
export class Persona {
    constructor(nom) {
        this.nom = nom;
        console.log('Mock ArrowFunctions: constructor was called');
    }
    dirNom() {
        console.log(this.nom)
        console.log('Mock dirNom was called')};
}

export const mockPersona = jest.fn();
const mock = jest.fn().mockImplementation(()=> {
    return {dirNom: mockDirNom};
});

export default mock;

