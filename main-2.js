//function per creare elementi li ed appendergli al conenitore ul
function createLi(element, clase = '', idUl) {

    const li = document.createElement('li'); //create elemento li

    li.textContent = element; //aggiungiammo ogni elemento per ogni li

    if (clase) {
        li.classList.add(clase); //se ce una classe aggiungiamo
    }

    const lista = document.getElementById(idUl); //prendiamo il nostro container UL
    if (lista) {
        lista.appendChild(li); //appendiamo tutti li
    } else {
        console.warn("No se encontró una lista con el id proporcionado."); //controllo errori
    }

    return li; //return li
}


//function per generare altri 10 mail
function generateMail(emptyList = true) { //controllo per verificare che la list non sia vuota 

    const list = document.getElementById('list');//lista DOM
    if (emptyList) //condizione per verificare che la lista non sia vuota
        list.innerHTML = ''; //svuotiamo i 10 campi

    for (let i = 0; i < 10; i++) { // 10 itterazioni
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail') //chiamata HTTP => API

            .catch(error => { //controlliamo errori
                console.log('error')
            })

            .then(res => {
                console.log(res.data.response) //debug
                mail = res.data.response //stampiamo le  mails
                createLi(mail, '', 'list') // invochiamo la funzione, passiamo le mail e il UL = 'list'
            })
    }
}

let mail //dichiaro una varibile
const fetchButton = document.getElementById('fetchButton'); //bottone DOM

generateMail(false); //invochiammo la funzione dicendogli che la lista non sara vuota 'false'
fetchButton.addEventListener('click', (event) => { //si como add event listener acetta solo un evento ed una funzione, dobbiamo richiamare la nostra funzione con un arrow function.
    generateMail();
})