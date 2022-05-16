//Nivell 1

//Exercici 1


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
        let empleat ="";
        let buscat = employees.findIndex(employees => employees.id == id);
            if(buscat >= 0) {
                empleat = employees[buscat].name;
                resolve(`${empleat}`);
            } else { 
                reject(`L'empleat ${empleat}, NO es troba a la base de dades`);
            }
    });
}

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let sou = 0;
        let buscat = salaries.findIndex(salaries => salaries.id == employee.id);
                if(buscat >=0) {
                    sou = Number(salaries[buscat].salary);
                    resolve (sou);
                } else {
                    reject('Empleat no trobat');
        }
    });
}

const funcioAsincrona = async (id) => {
    try {
        console.log('Iniciant cerca de nom i cognoms...');

        let nameAndSalary = await getEmployee(id);
        console.log(`${nameAndSalary}`);

        nameAndSalary = await getSalary(employees[id-1]);
        console.log(`${nameAndSalary}€`);

        console.log('Petició finalitzada amb exit!')

    }catch(error){
        console.log(error);
    }
}
funcioAsincrona(1);

//Exercici 2
/* 
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */

const delayTwoSeconds = async () => {
    
}



