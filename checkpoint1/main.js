/*
- FUNÇÃO onload
- função para adicionar os dados do formulario no array
- função para pegar os dados do array e montar o html - getProdutos
*/

window.onload = function() {
    getProdutos();
}

var produto1 = {
    'titulo': 'Pôr do sol',
    'descricao': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'imagem': 'paisagem1.jpg'
}

var produto2 = {
    'titulo': 'Natureza',
    'descricao': 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'imagem': 'paisagem2.jpg'
}

var produtosArray = [produto1, produto2];


let botaoSalvarReferencia = document.querySelector('#btnsalvar');
let botaoAdicionarReferencia = document.querySelector('#btnadicionar');

// FUNÇÃO PARA COLOCAR OS DADOS DO ARRAY NO HTML
function getProdutos() {
    //console.log(produtosArray);
    //alert(produtosArray);
    
    let itensReferencia = document.getElementById('itens');
    itensReferencia.innerHTML = '';
    for (var row of produtosArray) {

        let varhtml = `<div class="col">
        <div class="card shadow-sm">
            <img src="${row.imagem}">
            <div class="card-body">
                <h4>${row.titulo}</h4>
                <p class="card-text">${row.descricao}</p>
                </div>
            </div>
        </div>`

        itensReferencia.innerHTML += varhtml;

    }

}

botaoSalvarReferencia.addEventListener("click", function(event) {

    event.preventDefault();

    let tituloReferencia = document.getElementById("titulo").value;
    let descricaoReferencia = document.getElementById("descricao").value;
    let imagemReferencia = document.getElementById("imagem").value;

    var produto = {
        titulo: tituloReferencia,
        descricao: descricaoReferencia,
        imagem: imagemReferencia
    }

    produtosArray.push(produto);

    getProdutos();
})