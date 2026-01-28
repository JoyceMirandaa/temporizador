document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('enviar-dados');
    const iniciar = document.getElementById('iniciar');
    const pausar = document.getElementById('pausar');

    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const contagem = document.getElementById('contagem-numero').value;
    
        const inserir = document.getElementById('inserir-numero').value;

        iniciar.addEventListener('click', () => {
            inserir = contagem;
            setInterval(() => {
                inserir--
                console.log(inserir);
            }, 1000);
        });

        pausar.addEventListener('click', () => {
            clearInterval(inserir);
            console.log('Terminou!!!')
        });

    });
})
