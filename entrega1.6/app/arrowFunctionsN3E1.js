
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

module.exports = {
    Pelicula,
    crearPelicula,
}