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
        let buscat = employees.findIndex(employees => employees.id == id);
            if(buscat >= 0) {
                let empleat = employees[buscat];
                resolve(empleat);
            } else { 
                reject(`L'empleat ${empleat}, NO es troba a la base de dades`);
            }
    });
}

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

const funcioAsincrona = async (id) => {
    try {
        const treballador = await getEmployee(id);
        const salari = await getSalary(treballador);
        return console.log(`treballador: ${treballador.name}, sou: ${salari}`);
    }catch(error){
        console.log(error);
    }
}
funcioAsincrona(2);


//Exercici 2 + 3


let pingUsuari = 55;

const delayed = (ping) => {
    return new Promise((resolve, reject) => {
        if (ping < 120) {
            setTimeout (() => {resolve ('Ping correcte pots entrar a la sala');
        }, 2000);
        } else {
            reject (`El ping ${ping}, és massa alt per poder entrar a la sala`);
        }
    });
}

const mostraPing = async (ping) => {
    try{
        console.log ('Obtenint ping del usuari....');

        let permis = await delayed(ping);
        console.log(`${permis}`);

        console.log('Log del usuari');

    }catch (error) {
        console.log(error);
    }
}

mostraPing(pingUsuari);

// Nivell 2 + 3

// Exercici 1 


const doble = (numero) => {
    return new Promise ((resolve, reject)=>{
        if (!isNaN(numero)){
            setTimeout(()=>{resolve (numero*2)},2000);
        }else{
            reject('El camp introduit no és un número');
        }
    });
}


const sumaDobles = async (num1, num2, num3) => {
    let suma = await doble(num1);
        suma += await doble(num2);
        suma += await doble(num3);
        console.log(`${suma}`);
}
sumaDobles(6,35,44); 

//Nivell 3

//Exercici 1

/* 
Control de errors, exercici 1, catch a la funcio que es diu funcioAsincrona. Al exercici 2 funció delayed 
he introduit un reject del qual veu la funcio mostraPing amb un catch i al exercici 3, he introduit un reject
que veu la funció sumaDobles amb un catch que ens dona l'error per log.
 */


