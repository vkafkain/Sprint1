//Nivell 1

//Exercici 1

let sumaAuto = ((a, b) => console.log(a + b))(10, 2);

//Nivell 2

//Exercici 1

let paramNom = (name => ({nom: name}));

console.log(paramNom("Victor"));

//Exercici 2

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}

const funcioNom = new Persona("Victor");
funcioNom.dirNom();


//Nivell 3

//Exercici 1

function pelicules(titol) {
    this.titol = titol;
}

let cine = new pelicules("El padrino");

console.log(cine);

