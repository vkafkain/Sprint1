//Nivell 1

//Exercici 1

const rebut = false;

function missatgeRebut(){
    return new Promise((resolve, reject) => {
        !rebut ? resolve("Em rebut el missatge!") 
                : reject("Missatge NO rebut!");    
    });
}

missatgeRebut()
    .then((resolta) => console.log(resolta))
    .catch((error) => console.log(error));

//Exercici 2

const pasarItv = ((antiguitat, callback) => {
    antiguitat >= 5 ? callback(`El cotxe te ${antiguitat} anys, has de pasar la ITV`) 
                    : callback(`El cotxe te ${antiguitat} anys, NO has de pasar la ITV`);
});

let callback = (missatge) => {console.log(missatge)};

pasarItv(1, callback);

//Nivell 2

//Exercici 2

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


let getEmployee = (id) => {
    return new Promise ((resolve, reject) =>{
        let busqueda = employees.findIndex(employees => employees.id == id);
        busqueda >= 0 ? resolve(`El camp buscat: ${id}, troba a la base de dades`)
                : reject(`El camp buscat: ${id}, NO es troba a la base de dades`)
    });
}
getEmployee(2)
    .then ((resolta) => console.log(resolta))
    .catch((error) => console.log(error));


//Exercici 3


