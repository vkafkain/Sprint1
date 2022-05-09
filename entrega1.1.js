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
function comptar(){
    for (let i = 0; i <= 9; i++){
        console.log(i);
    }
}
const arrayDeuVegades = [];
for (let j = 0; j < 10; j++){
    arrayDeuVegades.push(comptar());
}


//Exercici 2

let mostrar = (name => console.log(`L'usuari ${name} te molt ping.`))(`Omar`);




