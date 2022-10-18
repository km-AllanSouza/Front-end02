let refContainer = document.getElementById('container')
let refTitulo = document.getElementById('titulo')
let refDescri = document.getElementById('descricao')
let refImgUrl = document.getElementById('imgUrl')
let refPost = document.getElementById('post')

refPost.addEventListener('click', function (event) {

    event.preventDefault()
    
    refContainer.innerHTML += `
    <div class="item">
            <img src=${refImgUrl.value}>
            <h2 >${refTitulo.value}</h2>
            <p>
            ${refDescri.value}
            </p>
      </div>
    `
    clear()

    
    /*
    let titulo = refTitulo.value
    let descricao = refDescri.value
    let foto = refImgUrl.value

    cardPost['titulo'] = titulo
    cardPost['descricao'] = descricao
    cardPost['foto'] = foto
    posts.push(cardPost)
    
    console.log(posts)
    console.log(titulo,descricao,foto)
    */
})

function clear(){
    refTitulo.value = ''
    refDescri.value = ''
    refImgUrl.value = ''
}

/*
let cardPost = {}

let posts = []


for (post of posts) {
    refContainer.innerHTML += `
        <div class="item">
            <img src=${post.foto}>
            <h2 >${post.titulo}</h2>
            <p>
            ${post.descricao}
            </p>
      </div> 
    `
}
*/