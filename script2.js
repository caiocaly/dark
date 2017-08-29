quarto = function (){
	printContent(quarto, padrao, replace);
}


printContent = function (targetRoom, targetState, printMode){
	document.getElementById('main').innerHTML = targetRoom.targetState;
}

testContent =function () {
	//document.getElementById('teste').innerHTML = 'Oi';
	 document.getElementById('main').innerHTML = quarto.padrao;
}

var quarto = {
	padrao: "Testando isso",
	apagado: "tudo escuro kkk"
}