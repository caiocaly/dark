var quarto = {
	visitas: 0,
	primeira: "Testando isso, bem vindo ao Quarto!",
	seguintes: "É só o quarto",
	decima: "sério, é só o quarto..."
}

quarto = function () {
		printContent (quarto, 'primeira', 'add' );
}

printContent = function (targetRoom, targetState, printType){
	if (printType == 'add') {

	  document.getElementById('main').innerHTML += "<p>" + targetRoom[targetState] + "</p>";
	
	} else if (printType == 'replace') {
	  document.getElementById('main').innerHTML = "<p>" + targetRoom[targetState] + "</p>";
	}
}

testContent = function () {
	//document.getElementById('teste').innerHTML = 'Oi';
	 document.getElementById('main').innerHTML = quarto.padrao;
}

