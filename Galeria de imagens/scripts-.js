document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas: ['cidade.png', 'tokyo.png', 'guara.png', 'onça.png', 'arara.png', 'outono.png', 'cataratas.png'],
        natureza: ['outono.png', 'cataratas.png'],
        cidade: ['cidade.png', 'tokyo.png'],
        animais: ['guara.png', 'onça.png', 'arara.png'],
    }

    function carregaImagens(categoria){
        // selecionar elementos html com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = '';
        const imagens = baseImagens[categoria];

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += '<div class = "imagem-item"> <img src="imagens/'+img+'" alt="'+img+'" /> </div>'
        })
    }

    function ordenaImagens(ordem){
        const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
        imagens.sort((a, b) =>{
            const nameA = a.querySelector('img').getAttribute('alt');
            const nameB = b.querySelector('img').getAttribute('alt');
            
            //operador ternário - se for true ? se não :
            return ordem == 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
        })
        const galeria = document.getElementById("galeria-imagens");
        galeria.innerHTML = ''; //esvazia box das imagens
        imagens.forEach(imagem => {
            galeria.appendChild(imagem)//adiciona as imagens novamente, agora ordenada
        })
    }

    // Evento de clique
    document.body.addEventListener('click', function (event){ 

        //acessa a lista de classe de onde clicou e procura pela classe botao-categoria
        if(event.target.classList.contains('botao-categoria')){
            const categoria = event.target.dataset.categoria;
            carregaImagens(categoria);

        }
    
        if(event.target.classList.contains('botao-ordenar')){
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);
            
        }

    })


})