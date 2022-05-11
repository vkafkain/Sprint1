//Nivell 1

//Exercici 1

const sumaAuto = ((a, b) => console.log(a + b))(10, 2);

//Nivell 2

//Exercici 1

const paramNom = (name => ({nom: name}));

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

let Pelicules = function() {
    if (this.constructor === Pelicules) {
        return console.log("No es pot instanciar una clase abstracta");
    }
};
Pelicules.prototype.genere = function() {
    return console.log("Metode abstracte")
};

let ElPadrino = function() {
    Pelicules.apply(this, arguments);
};
ElPadrino.prototype = Object.create(Pelicules.prototype);
ElPadrino.prototype.constructor = ElPadrino;

ElPadrino.prototype.genere = function() {
    console.log('mafia');
}

let elPadrino = new ElPadrino();

elPadrino.genere();




