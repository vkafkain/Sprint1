//Nivell 1

//Exercici 1

console.log(((a, b) => a + b)(6,4));

//Nivell 2

//Exercici 1

let paramNom = (name => ({nom: name}));

console.log(paramNom("Victor"));

//Exercici 2

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {console.log(this.nom)};
}

const funcioNom = new Persona("Victor");
funcioNom.dirNom();


//Nivell 3

//Exercici 1


function Pelicula(nom) {
    this.nom = nom;

    if (this.constructor === Pelicula) {
        return console.log("No es pot instanciar una clase abstracta");
    }
}

try {
    const elPadrino = new Pelicula()
} catch(error){
    console.log(`Error : ${error}`);
}

const crearPelicula = (nom) => {
    const pelicula = Object.create(Pelicula.prototype);
    pelicula.nom = nom;
    return pelicula;
}
const cienciaFiccio = crearPelicula('Matrix');

console.log('Objecte instanciat:');
console.log(cienciaFiccio);

console.log('És instancia de Pelicula:');
console.log(cienciaFiccio instanceof Pelicula);

