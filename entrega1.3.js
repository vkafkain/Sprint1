//Nivell 1

//Exercici 1
/* 
const rebut = false;

function missatgeRebut(){
    return new Promise((resolve, reject) => {
        !rebut ? resolve("Em rebut el missatge!") : reject("Missatge NO rebut!");    
    });
}

missatgeRebut()
    .then((resolta) => console.log(resolta))
    .catch((error) => console.log(error));

//Exercici 2

const pasarItv = ((antiguitat, callback) => {
    antiguitat >= 5 ? callback(`El cotxe te ${antiguitat} anys, has de pasar la ITV`) : callback(`El cotxe te ${antiguitat} anys, NO has de pasar la ITV`);
});

let callback = (missatge) => {console.log(missatge)};

pasarItv(1, callback);  */

//Nivell 2

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
getEmployee(2)
    .then ((resolta) => console.log(resolta))
    .catch((error) => console.log(error)); 

//Exercici 2

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
getSalary(employees[0])
    .then((resolta) => console.log(resolta))
    .catch((error) => console.log(error));

// Exercici 3


let idBuscat = 4

Promise.all([getEmployee(idBuscat), getSalary(employees[idBuscat-1])])
    .then(valors => {console.log(valors);
    })
    .catch((error) =>{          //Nivell 3 Exercici 1
        console.log(error);
    });








/* 
Fixa un element catch a la invocació del nivell 
anterior que capturi qualsevol error i el mostri per la consola. */
