
const paginas = document.querySelectorAll(".pagina");
const botoesNavegacao = document.querySelectorAll("[data-pagina]");
const botoesVoltar = document.querySelectorAll("[data-voltar]");

function mostrarPagina(idPagina) {
    const paginaSelecionada = document.getElementById(idPagina);

    if (!paginaSelecionada) {
        return;
    }

    paginas.forEach((pagina) => {
        pagina.hidden = pagina.id !== idPagina;
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

botoesNavegacao.forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarPagina(botao.dataset.pagina);
    });
});

botoesVoltar.forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarPagina("inicio");
    });
});
