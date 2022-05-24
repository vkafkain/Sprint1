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

let LaVidaEsUnMiracle = function(){
    Pelicules.apply(this, arguments);
};
LaVidaEsUnMiracle.prototype = Object.create(Pelicules.prototype);
LaVidaEsUnMiracle.prototype.constructor = LaVidaEsUnMiracle;

LaVidaEsUnMiracle.prototype.genere = function() {
    console.log('tragicomedia');
}

let elPadrino = new ElPadrino();
let laVidaEsUnMilagro = new LaVidaEsUnMiracle();

elPadrino.genere();
laVidaEsUnMilagro.genere();


