
import Persona from './__mocks__/mockArrowFunctions'
const mockDirNom = jest.fn();
jest.mock('./__mocks__/mockArrowFunctions', () => {
    return jest.fn().mockImplementation(() => {
        return {dirNom: mockDirNom};
    })
})
