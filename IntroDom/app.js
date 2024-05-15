function mostrarAlerta(){
    alert("Op@@ abaixo veja a div aparecer!") //*quando o usuario clicar no botão e chamar o alerta vai aparecer uma caixa de alerta com esse dizer
    document.getElementById("divEscondida").style.display = 'block'; //*aqui acessa o DOM pra que ele dispare a mudança pro usuário - o 'display esta sendo alterado de "none(que está no html)" para "block"'
}