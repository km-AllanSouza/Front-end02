let bodyColor = document.querySelector('body')
let postContainer = document.querySelector('.container')

function darkMode() {
    bodyColor.classList.toggle('dark')
}

let posts = [

    {
        titulo: "O Guepardo",
        descricao: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
        foto: "./imagens/chita.jpg"
    },

    {
        titulo: "O Jaguar",
        descricao: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão(Panthera leo).",
        foto: "./imagens/jaguar.jpg"
    },

    {
        titulo: "A Pantera Negra",
        descricao: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
        foto: "./imagens/pantera-negra.jpg"
    },

    {
        titulo: "O Leopardo",
        descricao: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista).",
        foto: "./imagens/leopardo.jpg"
    },

    {
        titulo:'O leão',
        descricao:'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênerogênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na Áfricasubsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
        foto:'./imagens/leon.jpg'
    },
    
    {   /* usando apenas 5 ou 8 objetos da lista o renderizador pula 1 "slot"*/
        titulo:'O leão',
        descricao:'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênerogênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na Áfricasubsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
        foto:'./imagens/leon.jpg'
    },

    {
        titulo:'Gato-dos-pampas',
        descricao:'O gato-dos-pampas ou gato-palheiro é um gato selvagem brasileiro que também pode ser encontrado em outras regiões da América do Sul. É um animal que vive em regiões abertas e campos nativos.A aparência desse peludo, varia entre a pelagem laranja-avermelhada e cinza-listrada. Além disso, é um dos felinos considerados quase em extinção, devido às mudanças climáticas, caças, etc.  ',
        foto:'https://www.dicaspetz.com.br/wp-content/uploads/2020/06/gatos-selvagens.jpg'

    },

    {
        titulo:'Gato-de-pallas',
        descricao:'Gato-de-pallas é uma espécie de gato selvagem também ameaçada de extinção que pode ser encontrada nas pastagens e montanhas da Ásia Central. Embora o gato-de-pallas possa parecer um gato grande, é principalmente o pelo que dá essa impressão, já que ele tem o tamanho e o peso de um gato selvagem doméstico. ',
        foto:'https://www.petz.com.br/blog/wp-content/uploads/2020/06/gatos-selvagens-pet.jpg'

    }
]

for (post of posts) {
    postContainer.innerHTML += `
    <div class="item">
        <img src=${post.foto}>
        <h2 >${post.titulo}</h2>
        <p>
        ${post.descricao}
        </p>
  </div> 
  `
}