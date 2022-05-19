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
            console.log('Finalitzat amb exit!')
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


const { exec } = require('child_process');

exec('dir', (error, stdout, stderr) => {
    if(error) {
        console.log(`Error: ${error}`)
        return
    }
    if(stderr) {
        console.log(`stderr: ${error}`);
        return
    }
    console.log(`stdout: ${stdout}`);
});

//Nivell 3

//Exercici 1

//Codifiquem

const codificar = () => {
    fs.readFile('exercici_1.5.txt', 'hex', (error, data) => {
        if(!error) {
            fs.writeFile('exercici_hex.txt', data, (error) => {
                if(error) {
                    console.log(`Error: ${error}`);
                }else {
                    console.log(`S'ha creat un arxiu en hexadecimal`);
                }
            });
        } else {
            console.log(`Error: ${error}`);
        }
    });
    fs.readFile('exercici_1.5.txt', 'base64', (error, data) => {
        if(!error) {
            fs.writeFile('exercici_base64.txt', data, (error) => {
                if(error) {
                    console.log(`Error: ${error}`);
                }else {
                    console.log(`S'ha creat un arxiu en base64`);
                }
            });
        } else {
            console.log(`Error: ${error}`);
        }
    });
}
    
codificar();
    

//Encriptem

const crypto = require('crypto');
const tipus = 'aes-192-cbc';
    
