//Nivell 1 

//Exercici 1

function userName(name){
    console.log(name);
}
userName(`Víctor`);

//Nivell 2

//Exercici 1

const nom = 'Victor';
const cognom = 'Lopez';
console.log(`Hola ${nom} ${cognom} com estàs?`);

//Exercici 2

function aniversari(name) {
    return `${name} avuí és el teu aniversari`
}
console.log(`Bon dia, ${aniversari(`Victor`)} fas 36 anys`);

//Nivell 3

//Exercici 1

var myArray = [];

const miTest = () => {
    for (let i=0; i<9; i++) {
        console.log(i)
        }
    return i;
};

for (var i=0; i<10; i++) {
  myArray.push(miTest());
}
console.log(myArray);



let arrayDeuVegades = [];

const comptar = () => {
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    return i;
}

for (let j = 0; j < 10; j++){
    arrayDeuVegades.push(comptar());
}
console.log(arrayDeuVegades);


//Exercici 2

let mostrar = (name => console.log(`L'usuari ${name} te molt ping.`))(`Joan`);




