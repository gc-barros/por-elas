window.onload = ajustarViewport();

function ajustarViewport () {
    // <meta id="vp" name="viewport" content="width=device-width, initial-scale=1.0">

    if (screen.width < 480) {
        // Se a largura da tela for menor que 480px, irá setar a width da meta tag para 340.
        var mvp = document.getElementById('vp');
        mvp.setAttribute('content','width=340');
    } else {
        var mvp = document.getElementById('vp');
        mvp.setAttribute('content','width=device-width, initial-scale=1.0');
    }  
}