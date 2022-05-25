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
        let buscat = employees.find(employee => employee.id === id);
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

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let buscat = salaries.findIndex(salaries => salaries.id == employee.id);
                if(buscat >=0) {
                    resolve(salaries[buscat].salary);
                } else {
                    reject('Empleat no trobat');
        }
    });
}
getSalary(employees)
    .then((resolta) => console.log(resolta))
    .catch((error) => console.log(error));

const funcioAsincrona = async (id) => {
    try {
        const treballador = await getEmployee(id);
        const salari = await getSalary(treballador);
        return (`treballador: ${treballador}, sou: ${salari}`);
    }catch(error){
        console.log(error);
    }
}


module.exports = {
    getEmployee,
    getSalary,
    funcioAsincrona,
}
