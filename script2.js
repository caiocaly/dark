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
		printContent (quarto, 'primeira', 'add' );
	}


testContent = function () {
	//document.getElementById('teste').innerHTML = 'Oi';
	 document.getElementById('main').innerHTML = quarto.padrao;
}

