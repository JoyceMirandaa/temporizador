document.addEventListener('DOMContentLoaded', ()=>{
    const message = document.getElementById('messagem-final');
    let destinop = document.getElementById("contagem-numero");
    let timer = 0;
   
   
    document.getElementById('iniciar').addEventListener('click', function() {
        limparMensagem();
        let inserir = document.getElementById("inserir-numero");
        let contagem = Number(inserir.value);
        if (timer == 0){
            if (contagem <= 0){
                mostrarMensagem("Número Inválido")
                return;
            }
            timer = setInterval(() => {
                if (contagem <= 1){
                    clearInterval(timer);
                    destinop.innerText = "";
                    mostrarMensagem("Tempo Acabou!!");
                    timer = 0;
                    return
                } else if(contagem < 0){
                    clearInterval(timer);
                    mostrarMensagem("Número Inválido");
                    timer = 0;
                    return
                } else{
                    contagem--
                    destinop.innerText = contagem;
                }
            }, 1000);
        } else{
            clearInterval(timer);
            timer = 0;
        }
    });

    function mostrarMensagem(text){
        message.textContent = text;
    }

    function limparMensagem() {
        message.textContent = "";
    }

    
})
