const body = document.querySelector('body');

const limparNumeros = () => {
    const container = document.getElementById('container-numbers');
    // Remove todos os elementos filhos do container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

const backgroundChange = () => {
    const random = Math.floor(Math.random() * 3) + 1;
    let backgroundImage = `image/background0${random}.jpeg`
    const background = document.createElement('img');
    document.body.appendChild(background);
    document.body.style.background = `url(${backgroundImage})`;
    document.body.style.background= 'noRepeate center center fixed'
    document.body.style.mozBackgroundSize = 'cover';
    document.body.style.oBackgroundSize = 'cover';
    document.body.style.backgroundSize = 'cover';
    document.body.style.zIndex = '-1';
}

const lotofacil = () => {
    limparNumeros();
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
        num.className = 'lotofacilNum';
        num.innerText = lotofacilArray[index];
        container.appendChild(num);
    }
};

const megaSena = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers'); // Add os números criados dentro do HTML
    const megaSena = new Set (); // Serve para não ter número repetidos
    while(megaSena.size < 6){
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        megaSena.add(randomNumber);
    }
    const megaSenaArray = Array.from(megaSena); // Converter o Set para um Array
    megaSenaArray.sort(function (a, b) { // Utilizada para ordenar do menor para o maior
      return a - b;
    });
    for (let index = 0; index < megaSenaArray.length; index += 1){ //Esse for foi criado para pegar todos os números ordenados do array e criar um elemento com eles dentro de forma ordenada para aparecer na tela do usuário
        const num = document.createElement('div');
        num.className = 'megaSenaNum';
        num.innerText = megaSenaArray[index];
        container.appendChild(num);
    }
};

const quina = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const quina = new Set ();
    while(quina.size < 5){
        const randomNumber = Math.floor(Math.random() * 80) + 1;
        quina.add(randomNumber);
    }
    const quinaArray = Array.from(quina);
    quinaArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < quinaArray.length; index += 1){
        const num = document.createElement('div');
        num.className = 'quinaNum';
        num.innerText = quinaArray[index];
        container.appendChild(num);
    }
};

const lotomania = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const lotomania = new Set ();
    while(lotomania.size < 50){
        const randomNumber = Math.floor(Math.random() * 99);
        lotomania.add(randomNumber);
    }
    const lotomaniaArray = Array.from(lotomania);
    lotomaniaArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < lotomaniaArray.length; index += 1){
        const num = document.createElement('div');
        num.className = 'lotomaniaNum';
        num.innerText = lotomaniaArray[index];
        container.appendChild(num);
    }
};

const timemania = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const timemania = new Set ();
    while(timemania.size < 10){
        const randomNumber = Math.floor(Math.random() * 80) +1;
        timemania.add(randomNumber);
    }
    const timemaniaArray = Array.from(timemania);
    timemaniaArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < timemaniaArray.length; index += 1){
        const num = document.createElement('div');
        num.className = 'timemaniaNum';
        num.innerText = timemaniaArray[index];
        container.appendChild(num);
    }
};

const duplaSena = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const duplaSena = new Set ();
    while(duplaSena.size < 6){
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        duplaSena.add(randomNumber);
    }
    const duplaSenaArray = Array.from(duplaSena);
    duplaSenaArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < duplaSenaArray.length; index += 1){
        const num = document.createElement('div');
        num.className = 'duplaSenaNum';
        num.innerText = duplaSenaArray[index];
        container.appendChild(num);
    }
};

const superSete = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const superSeteArray = [];
    for(let index = 0; index < 7; index +=1 ) {
        const num = document.createElement('div');
        num.id = `superSeteNum${index}`;
        const superSete= new Set ();
        while(superSete.size < 7){
            const randomNumber = Math.floor(Math.random() * 10);
            superSete.add(randomNumber);
        }
        superSeteArray[index] = Array.from(superSete);
        superSeteArray[index].sort(function (a, b) {
          return a - b;
        });
        num.innerText = superSeteArray[index];
        container.appendChild(num);   
    }
};

const diaSorte = () => {
    limparNumeros();
    const container = document.getElementById('container-numbers');
    const diaSorte= new Set ();
    while(diaSorte.size < 7){
        const randomNumber = Math.floor(Math.random() * 31) + 1;
        diaSorte.add(randomNumber);
    }
    const diaSorteArray = Array.from(diaSorte);
    diaSorteArray.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < diaSorteArray.length; index += 1){
        const div = document.createElement('div');
        div.className = 'diaSorteNum';
        const day = document.createElement('span');
        day.className = 'day';
        day.innerText = diaSorteArray[index];
        div.appendChild(day);
        container.appendChild(div);
    }
    const mes = document.createElement('span');
    const random = Math.floor(Math.random() * 12) + 1;
    mes.className = 'mes';
    mes.innerText = `Mês da sorte: ${random}`;
    container.appendChild(mes);
};

window.onload = () => {

    backgroundChange();

    const btnLotofacil = document.getElementById('lotofacil');
    btnLotofacil.addEventListener('click', lotofacil);

    const btnMegaSena = document.getElementById('mega-sena');
    btnMegaSena.addEventListener('click', megaSena);

    const btnQuina = document.getElementById('quina');
    btnQuina.addEventListener('click', quina);

    const btnLotomania = document.getElementById('lotomania');
    btnLotomania.addEventListener('click', lotomania);

    const btnTimemania = document.getElementById('timemania');
    btnTimemania.addEventListener('click', timemania);

    const btnDuplaSena = document.getElementById('dupla-sena');
    btnDuplaSena.addEventListener('click', duplaSena);

    const btnSuperSete = document.getElementById('super-sete');
    btnSuperSete.addEventListener('click', superSete);

    const btnDiaSorte = document.getElementById('dia-de-sorte');
    btnDiaSorte.addEventListener('click', diaSorte);
};