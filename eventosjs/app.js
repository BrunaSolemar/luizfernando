function exibirAlerta(){
    alert("Ola! Estou aparecendo porque você clicou no botão"); //*primeiro opção de chamar o alerta*inline*
}


document.getElementById("botao").onclick =exibirAlerta; //segunda opção de chamar o alerta*se for usar essa opção nao precisa colocar o onclick="exibirAlerta()"  no html *registro de eventos atraves de elementos html*



