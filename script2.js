var quarto = {
	padrao: "Testando isso",
	apagado: "tudo escuro kkk"
}

printContent = function (targetRoom, targetState){
	document.getElementById('main').innerHTML = targetRoom.targetState;
}

testContent = function () {
	//document.getElementById('teste').innerHTML = 'Oi';
	 document.getElementById('main').innerHTML = quarto.padrao;
}

