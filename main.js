// Descrizione
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)
// Buon Lavoro


let mail

for (let i = 0; i < 10; i++) { // 10 itterazioni
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail') //chiamata HTTP => API

        .catch(error => { //controlliamo errori
            console.log('error')
        })

        .then(res => {
            console.log(res.data.response) //debug
            mail = res.data.response //stampiamo le  mails

        })

}