//Número para jogar na mega sena
let megaSena = [];
let random;
let randomNumber
let numerosRepetidos = [];

for (let num = 0; num <= 5; num += 1) {
    // Gera um número randômico entre 0 (inclusive) e 1 (exclusive)
    random = Math.random();
    // Gera um número randômico entre 1 e 60 (ambos inclusive)
    randomNumber = Math.floor(random * 60) + 1;
    //Armazena no Array megaSena e verifica se tem número igual
    megaSena.push(randomNumber);
    for (let k = 0; k < megaSena.length; k += 1) {
        for (let j = k + 1; j < megaSena.length; j += 1) {
            if (megaSena[k] === megaSena[j]) {
                numerosRepetidos.push(megaSena[k]);
                megaSena.splice(k, 1);
                random = Math.random();
                randomNumber = Math.floor(random * 60) + 1;
                megaSena.push(randomNumber);
            }
        }
    }
}

megaSena.sort(function (a, b) {

    return a - b;

});