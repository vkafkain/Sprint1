// Nivell 1

// Exercici 1
/* 
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
    
 */
//Encriptem

//Comprobem si tenim el modul cryto activat.

let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

//encryptem els arxius

const {
    createReadStream,
    createWriteStream,
    fstat,
} = require('fs');

const {
    pipeline
} = require('stream');

const {
    scrypt,
    randomFill,
    createCipheriv,
} = require('crypto');

const algorith = 'aes-192-cbc';
const password = 'Hello World';

scrypt(password, 'salt', 24, (error, key) => {
    if(error) console.log(error);
    randomFill(new Uint8Array(16), (error, iv) => {
        if(error) console.log(error);

        const cipher = createCipheriv(algorith, key, iv);

        const input = createReadStream('exercici_base64.txt');

        const output = createWriteStream('exercici_base64.enc');

        const input2 = createReadStream('exercici_hex.txt');

        const output2 = createWriteStream('exercici_hex.enc');

        pipeline(input, cipher, output, (error) => {
            error ? console.log(`Error: ${error}`) : console.log(`El fitxer ha estat encriptat amb exit`);
        });
        pipeline(input2, cipher, output2, (error) => {
            error ? console.log(`Error: ${error}`) : console.log(`El fitxer ha estat encriptat amb exit`);
        })
    });
});

const eliminarFitxers = () => {
    fs.unlink('exercici_base64.txt', (error) => {
        
    });
}
