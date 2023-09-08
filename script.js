const lotofacil = () => {
    const lotofacil = new Set ();
    const container = document.getElementById('container-numbers');
    while(lotofacil.size < 15){
        const randomNumber = Math.floor(Math.random() * 25) + 1;
        lotofacil.add(randomNumber);
    }
    const lotofacilArray = Array.from(lotofacil);
    lotofacilArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < lotofacilArray.length; index += 1){
        const num = document.createElement('div');
        num.id = 'lotofacilNum';
        num.innerText = lotofacil[index];
        container.appendChild(num);
    }
};

const megaSena = () => {
    const megaSena = new Set (); // Serve para não ter número repetidos
    while(megaSena.size < 6){
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        megaSena.add(randomNumber);
    }
    const megaSenaArray = Array.from(megaSena); // Converter o Set para um Array
    megaSenaArray.sort(function (a, b) { // Utilizada para ordenar do menor para o maior
      return a - b;
    });
  
    return megaSenaArray; // Retornar o array ordenado
};

const quina = () => {
    const quina = new Set ();
    while(quina.size < 5){
        const randomNumber = Math.floor(Math.random() * 80) + 1;
        quina.add(randomNumber);
    }
    const quinaArray = Array.from(quina);
    quinaArray.sort(function (a, b) {
      return a - b;
    });
  
    return quinaArray;
};

const lotomania = () => {
    const lotomania = new Set ();
    while(lotomania.size < 50){
        const randomNumber = Math.floor(Math.random() * 99);
        lotomania.add(randomNumber);
    }
    const lotomaniaArray = Array.from(lotomania);
    lotomaniaArray.sort(function (a, b) {
      return a - b;
    });
  
    return lotomaniaArray;
};

const timemania = () => {
    const timemania = new Set ();
    while(timemania.size < 10){
        const randomNumber = Math.floor(Math.random() * 80) +1;
        timemania.add(randomNumber);
    }
    const timemaniaArray = Array.from(timemania);
    timemaniaArray.sort(function (a, b) {
      return a - b;
    });
  
    return timemaniaArray;
};

const duplaSena = () => {
    const duplaSena = new Set ();
    while(duplaSena.size < 6){
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        megaSena.add(randomNumber);
    }
    const duplaSenaArray = Array.from(duplaSena);
    duplaSenaArray.sort(function (a, b) {
      return a - b;
    });
  
    return duplaSenaArray;
};

const superSete = () => {
    const superSeteArray = [];
    for(let index = 0; index < 7; index +=1 ) {
        const superSete= new Set ();
        while(superSete.size < 7){
            const randomNumber = Math.floor(Math.random() * 10);
            superSete.add(randomNumber);
        }
        superSeteArray[index] = Array.from(superSete);
        superSeteArray[index].sort(function (a, b) {
          return a - b;
        });
        superSeteArray.push(superSeteArray)
    }
    return superSeteArray
};

window.onload = () => {
    const btnLotofacil = document.getElementById('lotofacil');
    btnLotofacil.addEventListener('click', )
};