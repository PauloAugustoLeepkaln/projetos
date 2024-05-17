document.addEventListener('DOMContentLoaded', function () {

        //const notaMedia = 10;
        //if(notaMedia >= 6){
            //alert("aluno aprovado");
        //}
        //else if (notaMedia > 4 && notaMedia <6) {
        //    alert("aluno quase passou");
        //}
        //else {
        //    alert("aluno reprovado");
        //}

        //const professor = "Lucas";
        //if (professor == "Lucas") {
        //    console.log("Sim é o Lucas");
        //} else {
        //    console.log("Não é Lucas");
        //}

        // === verifica se os dois são iguais e têm o mesmo tipo de dados 
        // != se é diferente 
        // !== se é estritamente diferente

         // ------------------------------ / --------------------- /

        function primeiraFuncao(parametro, segundoParametro) {

            return parametro + segundoParametro;
        }

        const parametro = "Essa é uma função com parâmetro";
        const segundoParametro = ", Essa é uma função com àsdgfsadgf";

        console.log(primeiraFuncao(parametro, segundoParametro));

        // ------------------------------ / --------------------- /

        //arrays em javascript são estruturas de dados que permitem
        //armazenar uma coleção ordenada de elementos.

        let primeiroArray = ['lucas', 'joão', 'Paulo', 'marcos'];

        console.log(primeiroArray)

        // ------------------------------ / --------------------- /

        //Os objetos são coleções NÃO ORDENADAS de pares chave-valor
        //pares chave-valor, onde cada valor é associado
        //a uma chave unica 

        let pessoa = {
            nome: 'Paulo',
            idade: '18',
            profissao: 'desempregado',
        }

        console.log(pessoa)        

        
        // ------------------------------ / --------------------- /

        const numeros = ["A", "B", "C", "D"]

        numeros.forEach(elemento => {
            console.log(elemento)

        })

        // ------------------------------ / --------------------- /

});

