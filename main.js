// Descrizione
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)
// Buon Lavoro

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
function generateMail() {

    const list = document.getElementById('list');//lista DOM
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

generateMail() //invochiamo la funzione che genera mail


fetchButton.addEventListener('click', generateMail) //al click di un bottone svuotiamo e ci facciamo dare altri 10 mail

