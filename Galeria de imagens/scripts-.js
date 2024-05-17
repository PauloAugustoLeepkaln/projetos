document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas: []
    }

    // Evento de clique
    document.body.addEventListener('click', function (event){ 

        //acessa a lista de classe de onde clicou e procura pela classe botao-categoria
        if(event.target.classList.contains("botao-categoria")){
            alert("poggers");

        }

    })


})