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
