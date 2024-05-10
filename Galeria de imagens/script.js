document.addEventListener('DOMContentLoaded', function () {

        const notaMedia = 6;
        if(notaMedia >= 6){
            alert("aluno aprovado");
        }
        else if (notaMedia > 4 && notaMedia <6) {
            alert("aluno quase passou");
        }
        else {
            alert("aluno reprovado");
        }

        const professor = "Lucas";
        if (professor == "Lucas") {
            console.log("Sim é o Lucas");
        } else {
            console.log("Não é Lucas");
        }

        // === verifica se os dois são iguais e têm o mesmo tipo de dados 
        // != se é diferente 
        // !== se é estritamente diferente
        // > maior
        // < menor  
})