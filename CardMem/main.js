let bodyRef = document.querySelector('body')
bodyRef.style.backgroundColor = 'grey'

//criando e editando tabuleiro simples
bodyRef.innerHTML = '<div class="board"> </div>'
let board = document.querySelector('.board')
board.style.backgroundColor = 'lightgrey'
board.style.position = 'relative'
board.style.marginTop = '50px'
board.style.marginLeft = '25%'
board.style.width = '805px'
board.style.height = '870px'



//criando deck de cartas
const cards = [{
        nome: 'fogo',
        img: './img/fogo.png'
    },
    {
        nome: 'agua',
        img: './img/agua.png'
    },
    {
        nome: 'pedra',
        img: './img/pedra.png'
    },
    {
        nome: 'eletrico',
        img: './img/eletric.png'
    },
    {
        nome: 'planta',
        img: './img/planta.png'
    },
    {
        nome: 'psic',
        img: './img/psic.png'
    },
    {
        nome: 'fogo',
        img: './img/fogo.png'
    },
    {
        nome: 'agua',
        img: './img/agua.png'
    },
    {
        nome: 'pedra',
        img: './img/pedra.png'
    },
    {
        nome: 'eletrico',
        img: './img/eletric.png'
    },
    {
        nome: 'planta',
        img: './img/planta.png'
    },
    {
        nome: 'psic',
        img: './img/psic.png'
    }
]

//criando um deck aleatorio com base no deck original
cards.sort(() => 0.5 - Math.random())

//cartas selecionadas
let cardSelected = []
let cardSelectedId = []
let pontos = 0

//criando tabuleiro com cartas aleatórias
function sortedBoard() {
    for (let i = 0; i < cards.length; i++) {
        const cards = document.createElement('img')
        cards.setAttribute('src', './img/back.png')
        cards.setAttribute('carta-id', i)
        cards.addEventListener('click', pickCard)
        board.appendChild(cards) //adicionando as cartas aleatorias no tabuleiro
    }
}



//seletor de cartas
function pickCard() {
    //console.log(cards)
    let pickedCard = this.getAttribute('carta-id')
    //console.log(cards[pickedCard].nome)
    //console.log(pickedCard)
    cardSelected.push(cards[pickedCard].nome)
    cardSelectedId.push(pickedCard)
    this.setAttribute('src', cards[pickedCard].img)
    if (cardSelected.length === 2) {
        setTimeout(checkMatch, 300)
    }
}


//checando match
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const cardSelected1 = cardSelectedId[0]
    const cardSelected2 = cardSelectedId[1]
    
    if (cards[cardSelected1] == cards[cardSelected2]) {
        alert('a mesma carta? sabe jogar nao ?')
        cards[cardSelected1].setAttribute('src','./img/back.png')
        
    }else if (cardSelected[0] == cardSelected[1]) {
        alert(' é um par')
        cards[cardSelected1].removeEventListener('click',pickCard)
        cards[cardSelected2].removeEventListener('click',pickCard)
        pontos ++
                       
    } else{
        alert('nao é um par')
        cards[cardSelected1].setAttribute('src','./img/back.png')
        cards[cardSelected2].setAttribute('src','./img/back.png')
    }
    cardSelected = []
    cardSelectedId = []
    //console.log(pontos)
    if (pontos == 6) { alert('congrats! fim do jogo!'),location.reload()}
}

sortedBoard()

/*
board.innerHTML=' <img class="img" src="https://i.ytimg.com/vi/dBT3rBTOGg8/maxresdefault.jpg">'
let imagem = document.querySelector('.img')
imagem.style.marginLeft='50px'
imagem.style.marginTop='50px'
*/