document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas: ['imagem.jpg', 'cidade.png', 'cidade2.png', 'animais.png', 'animais2.png', 'natureza.png', 'natureza2.png'],
        natureza: ['natureza.png', 'natureza2.png'],
        cidade: ['cidade.png', 'cidade2.png'],
        animais: ['animais.png', 'animais2.png'],
    }

    function carregaImagens(){
        // selecionar elementos html com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");

        const imagens = baseImagens['todas'];

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML = '<div> <img src="imagens/'+img+'" /> </div>'
        })
    }

    carregaImagens();

    // Evento de clique
    document.body.addEventListener('click', function (event){ 

        //acessa a lista de classe de onde clicou e procura pela classe botao-categoria
        if(event.target.classList.contains("botao-categoria")){
            alert("poggers");

        }

    })


})