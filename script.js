
"use strict";

// Seleciona todas as páginas do portfólio
const paginas = document.querySelectorAll(".pagina");

// Seleciona os botões do menu principal
const botoesNavegacao = document.querySelectorAll("[data-pagina]");

// Seleciona os botões de voltar ao início
const botoesVoltar = document.querySelectorAll("[data-voltar]");

/**
 * Exibe a página selecionada e oculta as demais.
 * @param {string} idPagina - Identificador da página.
 */
function mostrarPagina(idPagina) {
    const paginaSelecionada = document.getElementById(idPagina);

    // Verifica se a página existe
    if (!paginaSelecionada || !paginaSelecionada.classList.contains("pagina")) {
        return;
    }

    // Exibe somente a página selecionada
    paginas.forEach((pagina) => {
        pagina.hidden = pagina.id !== idPagina;
    });

    // Retorna ao topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Configura os botões do menu principal
botoesNavegacao.forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarPagina(botao.dataset.pagina);
    });
});

// Configura os botões de retorno ao início
botoesVoltar.forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarPagina("inicio");
    });
});
