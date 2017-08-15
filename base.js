var db = [{ // index 0 
    "description": "Escuridão completa e uma estranha sensação de de repente não estar mais em casa. Você se lembra de ter apagado as luzes, mas de alguma maneira parece que faz muito tempo... <br><br> Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.",
    "answers": [{
      "title": "Ligar as luzes",
      "target": 1,
      "add" : ""
    }, {
      "title": "Chorar",
      "target": 0,
      "add" : "Você chora um pouquinho, mas logo para e se recompõe. Você se assusta fácil né?"
    }]

  }, { // index 0 
    "description": "É o seu quarto. Ele está bem arrumadinho, até a cama está feita. É um quarto pequeno, mas aconchegante... Você se lembra de como gosta dele, mas também sente que tem alguma coisa errada. Só não sabe se é com o quarto ou se é com toda a situação",
    "answers": [{
      "title": "Examinar cama",
      "target": 1,
      "add" : "É sua cama. Está perfeitamente arrumada - nem parece que foi você..."
    }, {
      "title": "Examinar prateleiras",
      "target": 1,
      "add" : "Awn, seus queridos livros, todos organizadinhos. A maioria de ficção científica. <br><br> Tem um faltando, o seu preferido. Você vive relendo ele, deve ter deixado em algum canto da casa."
    },{
      "title": "Examinar paredes",
      "target": 1,
      "add" : "Tem umas rachaduras no papel de parede,que droga! São enormes e você não sabe como nunca percebeu antes... Será que apareceram da noite pro dia? Enfim, uma pena, você gosta tanto dessa estampa de sorvete."
    },{
      "title": "Examinar espelho",
      "target": 1,
      "add" : "Você se encara fixamente. Sua respiração sempre foi assim? Você sente que está respirando normalmente, mas seu reflexo parece quase ofegante."
    },{
      "title": "Ir para o corredor",
      "target": 3,
      "add" : ""
    }]

  }



];

var node = 0;
var complement = "";


window.printContent = function() {
  document.getElementById("descriptionDiv").innerHTML =
    db[node].description + "<br><br>" + complement;


var buttonList = "";

  for (i = 0, j = db[node].answers.length; i < j; i++) {
    buttonList += "<p><button onclick='pressButton("+i+")'>"

    + db[node].answers[i].title +
      "</button></p>";
  }

  document.getElementById("answersDiv").innerHTML = buttonList;
}
window.printContent();

window.goTo = function(x) {
  node = x;
  window.printContent()
}

pressButton = function(x){
complement = db[node].answers[x].add; 
window.goTo(db[node].answers[x].target);
}
