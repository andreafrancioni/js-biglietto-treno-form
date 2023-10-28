const ticketPrice = 0.21; //al km
let utente = document.getElementById("inputName");
let kmPercorsi = document.getElementById("inputKm");
let eta = document.getElementById("inputEta");
let btn = document.getElementById("sentBtn");
let offerta = document.getElementById("offerta");
let priceDiscount = 0;
let finalPrice = 0;


//Funzione Pulsante Invio
btn.addEventListener("click", function() {

	//Controlla se tutti i campi sono stati inseriti
	if(kmPercorsi.value=="" || utente.value=="") {
		alert("ERRORE! Non possono esistere campi vuoti.");
	}
	else {
		const priceKm = parseFloat(ticketPrice * kmPercorsi.value); //prezzo del biglietto in base ai km effettuati


		//Calcolo Offerta Biglietto e Prezzo
		if (eta.value < 18){
			priceDiscount = (priceKm * 20) / 100;
			finalPrice = priceKm - priceDiscount;
			offerta.innerHTML = "Sconto Minorenni";
		}
			else if(eta.value > 65){
			priceDiscount = (priceKm * 40) / 100;
			finalPrice = priceKm - priceDiscount;
			offerta.innerHTML = "Sconto Senior";
		}
			else{
			console.log("nessuno sconto applicato");
			finalPrice = priceKm;
			offerta.innerHTML = "Biglietto Standard";
		}
	
		//Genera numero Random per carrozza
		let numCarrozza = Math.floor( Math.random() * 9) +1;
		document.getElementById("carrozza").innerHTML = numCarrozza;

		//Genera numero Random per codice cp
		let numCp = Math.floor( Math.random() * 5000) +1;
		document.getElementById("codice").innerHTML = numCp;


		//Inserimento valori nei campi
		document.getElementById("utente").innerHTML = utente.value;
		document.getElementById("price").innerHTML = finalPrice + "&euro;";
	}

	
});