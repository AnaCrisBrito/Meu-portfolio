//setor de idiomas

const botoesIdioma = document.querySelectorAll(".idioma");

botoesIdioma.forEach((botao) => {
    botao.addEventListener("click", () => {

        botoesIdioma.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        const idioma = botao.dataset.idioma;

        if (idioma === "pt") {
            // os textos em português
        }

        if (idioma === "en") {
            // os textos em inglês
        }

    });
});



// configurações do Emailjs 


emailjs.init({
    publicKey: "gySLKWUSAdrcNr41I"
});


// formulário de contato

const formulario = document.getElementById("formulario_de_contato");
const botaoEnviar = document.getElementById("botao");
const mensagemStatus = document.getElementById("mensagem-status");

const serviceID = "service_17vahr4";
const templateID = "template_vx8buur";

let temporizadorMensagem;


// Exibe uma mensagem temporária na tela
function exibirMensagem(texto, tipo) {
    clearTimeout(temporizadorMensagem);

    mensagemStatus.textContent = texto;
    mensagemStatus.className = `mensagem-status ${tipo}`;

    temporizadorMensagem = setTimeout(() => {
        mensagemStatus.textContent = "";
        mensagemStatus.className = "mensagem-status";
    }, 3000);
}


// Envia o formulário
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const dadosEmail = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("mensagem").value.trim()
    };

    // Valida os campos
    if (!dadosEmail.name || !dadosEmail.email || !dadosEmail.message) {
        exibirMensagem(
            "Preencha todos os campos antes de enviar.",
            "erro"
        );

        return;
    }

    // Evita envios repetidos durante o processamento
    botaoEnviar.disabled = true;
    botaoEnviar.textContent = "Enviando...";

    // Envia os dados ao EmailJS
    emailjs.send(serviceID, templateID, dadosEmail)

        .then(() => {
            formulario.reset();

            exibirMensagem(
                "Mensagem enviada com sucesso!",
                "sucesso"
            );
        })

        .catch((erro) => {
            console.error("Erro ao enviar o e-mail:", erro);

            exibirMensagem(
                "Não foi possível enviar sua mensagem. Tente novamente.",
                "erro"
            );
        })

        .finally(() => {
            botaoEnviar.disabled = false;
            botaoEnviar.textContent = "Enviar";
        });
});