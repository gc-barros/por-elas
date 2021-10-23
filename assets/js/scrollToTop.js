// Selecionando o botão
const mybutton = document.getElementById("scroll-button");

// Temporizador do scroll
let scrollTimer = -1;

// Dispara a função ao scrollar a página
window.onscroll = function () {   
    scrollFunction();
};

function scrollFunction() {
    // Reseta o temporizador ao scrollar
    if (scrollTimer != -1) {
        clearTimeout(scrollTimer);
    }

    // Esconde o botão após 2500ms, se o scroll parar
    scrollTimer = window.setTimeout("hideButton()", 2000);

    // Quando o usuário scrollar a página 4800px para baixo, exibe o botão
    if (document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800) {
        mybutton.style.display = "block";
       
    } else {
        hideButton();
    }
}

// Evita que o botão suma enquanto o mouse estiver em cima dele
mybutton.addEventListener('mouseover', () => {
    clearTimeout(scrollTimer);
});

// Esconder o botão
function hideButton() {
    mybutton.style.display = "none";
}

// Quando o usuário clicar no botão, voltará ao topo da página
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}
