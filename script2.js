var quarto = {
	visitas: 0,
	primeira: "Testando isso, bem vindo ao Quarto!",
	seguintes: "É só o quarto",
	decima: "sério, é só o quarto..."
}

printContent = function (targetRoom, targetState, printType){
	if (printType == 'add') {
		document.getElementById('main').innerHTML += "<p>" + targetRoom[targetState] + "</p>";

	} else if (printType == 'replace') {
		document.getElementById('main').innerHTML = "<p>" + targetRoom[targetState] + "</p>";
	}
}

Quarto = function () {
	if (quarto.visitas == 0) {
		printContent (quarto, 'primeira', 'replace' );
	} else if (4 > quarto.visitas > 0) {
		printContent (quarto, 'seguintes', 'replace');
	} else {
		printContent (quarto, 'decima', 'add');
	}

	quarto.visitas ++;
}