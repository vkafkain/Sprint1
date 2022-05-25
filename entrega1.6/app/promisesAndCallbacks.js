
/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues 
promises de manera que es retorni per la consola el nom de l'empleat i el seu salari. */

//Arreglo el exercici arrel del feedback rebut per part del Omar


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmployee = (id) => {
    return new Promise ((resolve, reject) => {
        let buscat = employees.find(employee => employee.id == id);
            if(buscat) {
                resolve(buscat);
            } else { 
                reject(`El id:${id}, no es troba a la base de dades`);
            }
    });
}
getEmployee(2)
    .then ((resolta) => console.log(resolta))
    .catch((error) => console.log(error)); 

//Exercici 2

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let buscat = salaries.find(salario => salario.id == employee.id);
                if(buscat) {
                    resolve (buscat.salary);
                } else {
                    reject('Empleat no trobat');
        }
    });
}
getSalary({
    id: 2,
    name: 'Bill Gates'
})
    .then(resolta => console.log(resolta))
    .catch(error => console.log (error));

// Exercici 3

let idBuscat = 2;

    getEmployee(idBuscat)
        .then((resolta) => {
            getSalary(resolta)
            .then((salari) =>{
                console.log(`Empleat: ${resolta.name} Sou: ${salari}`);
            })
            .catch((error) =>{
                console.log(error);
            });
        });


module.exports = {
    getEmployee,
    getSalary,
}