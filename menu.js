document.addEventListener("DOMContentLoaded", function() {
    const imgPessoa = document.querySelector(".img-topo-site img");
    let movimentoAtivo = false;
    let intervalo;

    function iniciarMovimento() {
        intervalo = setInterval(function() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const imgWidth = imgPessoa.offsetWidth;
            const imgHeight = imgPessoa.offsetHeight;

            const posX = Math.floor(Math.random() * (screenWidth - imgWidth));
            const posY = Math.floor(Math.random() * (screenHeight - imgHeight));

            imgPessoa.style.position = "absolute";
            imgPessoa.style.left = posX + "px";
            imgPessoa.style.top = posY + "px";
        }, 100);
    }

    function pararMovimento() {
        clearInterval(intervalo);
        imgPessoa.style.position = "static";
    }

    imgPessoa.addEventListener("click", function() {
        if (!movimentoAtivo) {
            iniciarMovimento();
        } else {
            pararMovimento();
        }
        movimentoAtivo = !movimentoAtivo;
    });
});