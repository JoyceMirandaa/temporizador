document.addEventListener('DOMContentLoaded', ()=>{
    const pausar = document.getElementById('pausar');
    const message = document.getElementById('messagem-final');
   
    document.getElementById('iniciar').addEventListener('click', function() {
        let contagem = document.getElementById("inserir-numero").value;
        let destinop = document.getElementById("contagem-numero");

        setInterval(() => {
            contagem--
            console.log(destinop);
            destinop.innerText = contagem;

            if (contagem == 0){
                clearInterval(contagem);
                destinop = null;
                mostrarMensagem("Tempo Acabou!!");
                document.getElementById('contagem-numero').textContent = '';
            } else if(contagem < 0){
                clearInterval(contagem);
                destinop = null;
                mostrarMensagem("Número Inválido");
                document.getElementById('contagem-numero').textContent = '';
            }
        }, 1000);
    });

    function mostrarMensagem(text,color){
        message.textContent = text;
    }

    
})
