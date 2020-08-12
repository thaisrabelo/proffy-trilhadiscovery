// procurar o botão
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click', cloneField) // evento de clicar, ação: clone field

// executar uma ação
function cloneField() { // tamo criando a ação clone field atráves de uma função.

  // duplicar os campos. que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
      //const é para declarar variável constante que não muda, valor constante, e depois busca o campo que quer, que é a div schedule-item inteira. cloneNode : clonar elementos HTML (node, nós). true pega a arvore inteira

  // pegar os campos. que campos?
  const fields = newFieldContainer.querySelectorAll('input')
    //acima esta pegando aquilo que ta no newFieldContainer e ta selecionando todos os inputs dele, colocando na variavel fields.

  // para cada campo, limpar: forEach (para cada) naquilo que ta no fields.
  fields.forEach(function(field){ // o valor passado pra função é o field do momento, que vamos chamas de field. e ao p que faz com ele? limpa!!
    // pegar o field do momento e limpa ele
    field.value = ""
  })

  // colocar na pagina. onde? qualquer lugar na pagina?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}