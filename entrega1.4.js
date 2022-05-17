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
        console.log('Iniciant cerca de nom, cognoms i salari...');

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

        console.log('Log del usuari')

    }catch (error) {
        console.log(error);
    }
}

mostraPing(pingUsuari);

// Nivell 2

// Exercici 1 


const doble = (numero) => {
    return new Promise ((resolve, reject)=>{
        if (!isNaN(numero)){
            setTimeout(()=>{resolve (numero*2)},2000);
        }else{
            reject('El camp introduit no és un número')
        }
    })
}


const sumaDobles = async (num1, num2, num3) => {
    try{
        let suma = await doble(num1 + num2 + num3);
        console.log(`${suma}`);
    }catch(error){
        console.log(error);
    }
}
sumaDobles(2,3,4); 

//Nivell 3

//Exercici 1

/* 
Control de errors, exercici 1, catch a la funcio que es diu funcioAsincrona. Al exercici 2 funció delayed 
he introduit un reject del qual veu la funcio mostraPing amb un catch i al exercici 3, he introduit un reject
que veu la funció sumaDobles amb un catch que ens dona l'error per log.
 */
