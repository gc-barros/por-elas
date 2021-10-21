const botaoCompartilhar = document.querySelector('[data-share]');
const mensagem = document.querySelector('[data-endline]');
const urlLink = window.location.href;
const shareData = {
    title: 'Conheça o Projeto Por Elas',
    text: 'Que o poder público não liga para mulheres não é novidade, mas até quando mulheres em péssimas condições continuarão vivendo sem proteção e cuidado?',
    url: urlLink
}

botaoCompartilhar.addEventListener('click', async () => {

    if (navigator.share) {

        try {
            await navigator.share(shareData)
    
        } catch(err) {
            console.error('Error: ' + e);
        }

    } else {
        mensagem.classList.toggle('visible');
        navigator.clipboard.writeText(urlLink);
    }

});