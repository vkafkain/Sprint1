const doble = (numero) => {
    return new Promise ((resolve, reject)=>{
        if (!isNaN(numero)){
            setTimeout(()=>{resolve (numero*2)},2000);
        }else{
            reject('El camp introduit no és un número');
        }
    })
}

const sumaDobles = async (num1, num2, num3) => {
    try{
        let suma = await doble(num1);
        suma += await doble(num2);
        suma += await doble(num3);
        return suma;
    }catch(error){
        console.log(error);
    }
}
sumaDobles(6,35,44); 

module.exports = {
    doble,
    sumaDobles,
    testEnvironment: 'node',
}