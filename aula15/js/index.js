let cardRef = document.querySelector('.card')
let buttonRef = document.querySelector('#random')

function gerarUsuario() {
    
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let usuario = new Object()
        //manipulamos a resposta
        console.log(data.results)
        usuario.nome = data.results[0].name.first
        usuario.nomeL = data.results[0].name.last
        usuario.email = data.results[0].email
        usuario.img = data.results[0].picture.large

        renderizarDadosUsuario(usuario)

    })

}

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona


function renderizarDadosUsuario(usuario) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    cardRef.innerHTML = `
      <p><img src="${usuario.img}" alt=""></p>
      <p>${usuario.nome.concat(" ", usuario.nomeL)}</p>
      <p>${usuario.email}</p>
    `
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

buttonRef.addEventListener('click',function(event){
    
    event.preventDefault()
    gerarUsuario()
    
})

window.onload = gerarUsuario