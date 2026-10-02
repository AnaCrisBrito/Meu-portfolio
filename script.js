const botoesIdioma = document.querySelectorAll(".idioma");

botoesIdioma.forEach((botao) => {
    botao.addEventListener("click", () => {

        botoesIdioma.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        const idioma = botao.dataset.idioma;

        if (idioma === "pt") {
            // textos em português
        }

        if (idioma === "en") {
            // textos em inglês
        }
    });
});