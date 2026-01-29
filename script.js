document.addEventListener('DOMContentLoaded', ()=>{
    const pausar = document.getElementById('pausar')
   
    document.getElementById('iniciar').addEventListener('click', function() {
        let contagem = document.getElementById("inserir-numero").value;
        let destinop = document.getElementById("contagem-numero");

        setInterval(() => {
            contagem--
            console.log(destinop);
            destinop.innerText = contagem;
            if (contagem == 0){
                clearInterval(contagem);
                destinop = 0;
            }
        }, 1000);
        pausar.addEventListener('click', function(){
            clearInterval(contagem);
            destinop = null;
        });
    });

    
})
