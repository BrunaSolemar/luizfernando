//*let comentários = document.getElementsByTagName("li"); //*aplica os comandos aos tres comentarios ao mesmo tempo - TAGNAME - acessa todas as tags, ou seja, todas as "li"
//*console.dir(comentarios); //*dir = arvore genealogica que o navegador tem dos elementos

//*acima está um metodo menos flexivel de ajustar os comandas, abaixo está o metodo mais flexivel

let comentarios = document.querySelectorAll(".lista"); //*é usado quando tem varias listas, pq ai ele chama somente a lista que tem class, no caso o html esta como <li class="lista">, por isso o (".lista")
console.dir(comentarios);

for(let comentario of comentarios){
    console.log(comentario);
} //*deixa o devTools mais "limpo" para visualização