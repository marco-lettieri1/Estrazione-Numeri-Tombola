// Array per salvare i numeri estratti
let numeriEstratti = [];

// Funzione per creare il tabellone
function creaTabellone() {
  const tabellone = document.getElementById("tabellone");
  tabellone.innerHTML = ""; // Resetta il contenuto
  for (let i = 1; i <= 90; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `num-${i}`;
    cell.textContent = i;
    tabellone.appendChild(cell);
  }
}

// Funzione per estrarre un numero
function estraiNumero() {
  // Controlla se tutti i numeri sono stati estratti
  if (numeriEstratti.length >= 90) {
    alert("Tutti i numeri sono stati estratti!");
    return;
  }

  // Estrai un numero casuale non ancora estratto
  let numero;
  do {
    numero = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstratti.includes(numero));

  // Aggiungi il numero estratto alla lista
  numeriEstratti.push(numero);

  // Aggiorna il numero visualizzato e colora il tabellone
  document.getElementById("numeroEstratto").textContent = numero;
  document.getElementById(`num-${numero}`).classList.add("estratto");
}

// Funzione per iniziare una nuova partita
function nuovaPartita() {
  // Svuota l'elenco dei numeri estratti
  numeriEstratti = [];

  // Ripristina il tabellone
  creaTabellone();

  // Resetta il numero estratto visualizzato
  document.getElementById("numeroEstratto").textContent = "--";
}

// Crea il tabellone al caricamento della pagina
window.onload = creaTabellone;
