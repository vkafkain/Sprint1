// Nivell 1

// Exercici 1

let fs = require('fs');

let text = `Estic escrivint en un arxiu de textos des de Visual Studio Code amb Nodejs`;

fs.writeFile('exercici_1.5.txt', text, {encoding: 'utf-8'}, (error) => {
    if (error){
        console.log(`Error: ${error}`);
    } else {
        console.log(`La escriptura s'ha realitzat correctament!`)
    }
});

//Exercici 2

fs.readFile('exercici_1.5.txt', {encoding: 'utf-8'}, (error, dades) => {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(`Llegint dades...`);
        console.log(`${dades}`);
    }
});

//Exercici 3

let zlib = require('zlib');
let tipusCompresio = zlib.createGzip();
let arxiu = 'exercici_1.5.txt';
let readstream = fs.createReadStream(arxiu);

const comprimir = (arxiu) => {
    let arxiuComprimit = arxiu+'.gz';
    writestream = fs.createWriteStream(arxiuComprimit);
    readstream.pipe(tipusCompresio).pipe(writestream);
}

comprimir(arxiu);

//Nivell 2

//Exercici 1

const recursivitat = (num) => {
    let missatge = `Queden ${num} segons per finalitzar`;
    setTimeout(() => {
        if(num === 0){
            return;
        }
        if(num > 0){
            console.log(missatge)
        return recursivitat(num -1);
        }
    },1000);
}

recursivitat(5);  

//Exercici 2


