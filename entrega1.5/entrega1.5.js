// Nivell 1

// Exercici 1

let fs = require('fs');


const escriureArxiu = (nom, info) => {
    fs.writeFile(nom, info, error => {
        if(error) {
            console.log(`Error: ${error}`);
            
        }
    });
}

//Exercici 2

const llegirArxiu = () => 
    fs.readFile('exercici_1.5.txt', 'utf8',(error, data) => {
    error ? console.log(`Error: ${error}`):
    console.log(data);
});


//Exercici 3

let zlib = require('zlib');
let tipusCompresio = zlib.createGzip();
let nomArxiu = 'exercici_1.5.txt';
const comprimir = () => {
    let llegir = fs.createReadStream(nomArxiu);
    let escriure = fs.createWriteStream(nomArxiu+'.gz');
    llegir.pipe(tipusCompresio).pipe(escriure)
}


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

//Exercici 2

const mostrarDir = () => {
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
}

//Nivell 3

//Exercici 1

//Codifiquem

const codificar = () => {
fs.readFile('exercici_1.5.txt', 'utf8', (error,data) => {
    if (error) {
        console.log(error);
    }
    let temp = Buffer.from(data).toString('base64');
    escriureArxiu('exercici_1.5_64.txt',temp);

    temp = Buffer.from(data).toString('hex');
    escriureArxiu('exercici_1.5_hex.txt',temp);
    });
}

//Encriptem

//Comprobem si tenim el modul cryto activat.

let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

//Encriptem els arxius

const encriptacioArxiu = () => {
    setTimeout (() => {
        const crypto = require('crypto');
        const algorith = 'aes-192-cbc';
        const key = 'vOVH6sdmpNWjRRIqCc7rdxs0';
        const iv = crypto.randomBytes(16);
        const llegir = fs.createReadStream('exercici_1.5_64.txt');
        const llegir2 = fs.createReadStream('exercici_1.5_hex.txt');
        const encriptar = crypto.createCipheriv(algorith, key, iv);
        const escriure = fs.createWriteStream('exercici_base64_enc.txt');
        const escriure2 = fs.createWriteStream('exercici_hex_enc.txt');

llegir.pipe(encriptar).pipe(escriure);
llegir2.pipe(encriptar).pipe(escriure2);
}, 500);

setTimeout(() => {
    fs.unlinkSync('exercici_1.5_64.txt', (error) => {
        if (error) {
        console.log(error);
    }
});
    fs.unlinkSync('exercici_1.5_hex.txt', (error) => {
        if (error) {
        console.log(error);
    }
});
},1000);
    console.log('Arxius Eliminats amb exit');
}

//Desencriptem els arxius => tornen a base64 i hex respectivament.

const desencriptacioArxiu = () => {
    setTimeout (() => {
        const crypto = require('crypto');
        const algorith = 'aes-192-cbc';
        const key = 'vOVH6sdmpNWjRRIqCc7rdxs0';
        const iv = crypto.randomBytes(16);
        const llegir = fs.createReadStream('exercici_base64_enc.txt');
        const llegir2 = fs.createReadStream('exercici_hex_enc.txt');
        const desencriptar = crypto.createDecipheriv(algorith, key, iv);
        const escriure = fs.createWriteStream('exercici_1.5_64.txt');
        const escriure2 = fs.createWriteStream('exercici_1.5_hex.txt');

llegir.pipe(desencriptar).pipe(escriure);
llegir2.pipe(desencriptar).pipe(escriure2);
    }, 2000);

setTimeout(() => {
    fs.unlinkSync('exercici_base64_enc.txt', (error) => {
        if (error) {
        console.log(error);
    }
});
    fs.unlinkSync('exercici_hex_enc.txt', (error) => {
        if (error) {
        console.log(error);
    }
});
},3000);
    console.log('Arxius Eliminats amb exit');

}

/* 
Nivell 2

Exercici 1

Crea una funció que imprimeixi recursivament 
un missatge per la consola amb demores d'un segon. */

// recursivitat();

/* 
Nivell 2

Exercici 2

Crea una funció que llisti per la consola 
el contingut del directori d'usuari de l'ordinador 
utilizant Node Child Processes.
 */

mostrarDir();    

//Funcions de tractarments d'arxius

//Nivell 1
/* 
//Exercici 1
escriureArxiu('exercici_1.5.txt', `Estic escrivint en un arxiu de textos des de Visual Studio Code amb Nodejs`);

//Exercici 2
llegirArxiu();

//Exercici 3
comprimir();

//Nivell 3

//Exercici 1
codificar();
encriptacioArxiu();
desencriptacioArxiu();

 */

