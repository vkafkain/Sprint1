//Modifiquem l'exercici per poder rebre l'arxiu JSON. També es podria fer amb fs.readFileSync de manera síncrona o amb fs.readFile asíncrona.

const {employees} = require('../employeesSalaries.json');
const {salaries} = require('../employeesSalaries.json');

const getEmployeeJSON = (id) => {
    return new Promise((resolve, reject) => {
        let buscat = employees.findIndex(employees => employees.id == id);
            if(buscat >= 0) {
                let empleat = employees[buscat];
                resolve(empleat);
            } else {
                reject(`El id ${id} no es troba a la base de dades`);
            }
    });
}
const getSalaryJSON = (employee) => {
    return new Promise((resolve, reject) => {
        let buscat = salaries.findIndex(salaries => salaries.id == employee.id);
                if(buscat >=0) {
                    resolve(salaries[buscat].salary);
                } else {
                    reject('Empleat no trobat');
        }
    });
}

const funcioAsincrona = async (id) => {
    try {
        const treballador = await getEmployeeJSON(id);
        const salari = await getSalaryJSON(treballador);
        return console.log(`treballador: ${treballador.name}, sou: ${salari}`);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getEmployeeJSON,
    getSalaryJSON,
    funcioAsincrona,
}