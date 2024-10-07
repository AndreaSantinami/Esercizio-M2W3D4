let Titolo = document.getElementsByTagName("h1")[0].textContent
let footer = document.getElementsByTagName("h4")[0].textContent
function changeText() { //cambia titolo al passaggio del mouse
    document.getElementsByTagName("h1")[0].textContent = "Titolo cambiato"
}

function resetText() { // resetta il titolo quando il mouse va via 
    document.getElementsByTagName("h1")[0].textContent = Titolo
}
function changeBackGroundColor() { // cambia colore pagina al caricamento html
    let color = document.getElementsByTagName("body")[0]
    color.style.backgroundColor = "red"
}

function nascondiImmagini() { // cambia visibilità alle immagini
    // let immagini = document.getElementsByClassName(".immagine_articolo img")
    let immagini = document.querySelectorAll(".immagine_articolo img")

    for (let i = 0; i < immagini.length; i++) {
        immagini[i].classList.toggle("immagine_articolo_nascosto")
    }
}

function cambia_prezzo_casuale() { // cambia il prezzo in modo casuale
    let prezzo_articolo = document.querySelectorAll(".prezzo_articolo")
    let prezzo_casuale = (Math.random() * (500 - 1)).toFixed(2);
    for (let i = 0; i < prezzo_articolo.length; i++) {
        prezzo_articolo[i].textContent = prezzo_casuale + "$"
    }
    
}

function classe_link() {
    let links = document.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add("link")
    }
}

function changeTextFooter() {
    document.getElementsByTagName("h4")[0].textContent = Titolo + " - Corso Camillo Benso Cavour, 32a, 27100 Pavia PV"
}

function resetTextFooter() {
    document.getElementsByTagName("h4")[0].textContent = footer
}

function salvaCommento() {
    alert("Funzionalità ancora non implementata!")
}


function cambia_prezzo_colore() { // cambia casualemente il colore del prezzo
    let prezzoColore = document.querySelectorAll(".prezzo_articolo")
    let coloreCasuale = "#" + Math.floor(Math.random() * 16777215).toString(16)
    /* Math.random() genera un numero casuale tra 0 e 1.
    Questo numero viene moltiplicato per 16777215 (il massimo valore esadecimale per i colori).
    Math.floor() arrotonda il risultato al numero intero inferiore.
    toString(16) converte questo numero intero in una stringa esadecimale. */

    for (let i = 0; i < prezzoColore.length; i++) {
        prezzoColore[i].style.color = coloreCasuale
    }
}

onload = classe_link()
onload = changeBackGroundColor()