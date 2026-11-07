"use strict";

/* Configurações */

const CONFIG = {
    emailjs: {
        publicKey: "gySLKWUSAdrcNr41I",
        serviceID: "service_17vahr4",
        templateID: "template_vx8buur",
    },
    idiomaPadrao: "pt",
    chaveStorage: "portfolio-idioma",
    tempoMensagemMs: 5000,
    larguraMenuMobile: 800,
};


/* 
   TRADUÇÕES
   Para adicionar um idioma (ex.: "es"), crie um novo objeto
   com as mesmas chaves e um botão com data-idioma="es".
    */

const TRADUCOES = {
    pt: {
        "meta.title": "Portfólio - Ana Cristina Brito",
        "meta.description": "Portfólio de Ana Cristina Brito, estudante de Sistemas para Internet. Projetos, habilidades e contato.",
        "skip": "Pular para o conteúdo",

        "logo.link": "Ir para o início",
        "nav.label": "Navegação principal",
        "nav.menu": "Menu",
        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.skills": "Habilidades",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",
        "lang.label": "Idioma",

        "home.aria": "Apresentação",
        "home.photoAlt": "Foto de perfil de Ana Cristina Brito",
        "home.hello": "OLÁ, SOU A ANA.",
        "home.title": "Estudante de Sistemas<br>para Internet",
        "home.cta": "Ver Projetos →",
        "home.desc": "Construindo experiências web modernas enquanto aprendo e evoluo constantemente no universo da tecnologia.",
        "home.social": "Redes sociais",
        "home.lattes": "Currículo Lattes",

        "about.title": "Sobre Mim",
        "about.p1": "Sou Ana Cristina Brito de Miranda, estudante de <strong class=\"texto-destaque\">Sistemas para Internet</strong> na UEG e estou construindo minha carreira na área de tecnologia. Atualmente, desenvolvo meus conhecimentos em programação, desenvolvimento web e banco de dados, enquanto exploro diferentes áreas para descobrir minha especialização.",
        "about.p2": "Além da tecnologia, atuo como professora de inglês, experiência que fortaleceu habilidades como comunicação, organização e pensamento analítico, competências que levo para todos os meus projetos.",
        "about.photoAlt": "Foto de Ana Cristina Brito",

        "skills.title": "Habilidades",
        "skills.soon": "Em breve...",
        "skills.soonAlt": "Tecnologia em breve",

        "projects.title": "Projetos",
        "projects.stack": "Tecnologias utilizadas no projeto",
        "projects.links": "Links do projeto",
        "projects.live": "Ver online",
        "projects.wip": "Projeto em desenvolvimento.",
        "projects.velodash.alt": "Prévia do VeloDash",
        "projects.velodash.desc": "Dashboard analítico interativo para análise de métricas operacionais e financeiras em tempo real.",
        "projects.blackjack.alt": "Prévia do BlackJack",
        "projects.blackjack.desc": "O clássico jogo de cartas “21” desenvolvido no navegador, aplicando lógica de programação para manipulação de baralho e condições de vitória.",
        "projects.imc.name": "Calculadora de IMC",
        "projects.imc.alt": "Prévia da Calculadora de IMC",
        "projects.imc.desc": "Aplicação interativa que calcula o Índice de Massa Corporal do usuário em tempo real, processando dados e retornando um feedback visual instantâneo.",
        "projects.clock.name": "Relógio com JS",
        "projects.clock.alt": "Prévia do Relógio com JavaScript",
        "projects.clock.desc": "Um relógio moderno e dinâmico que manipula o tempo em tempo real, utilizando funções assíncronas do JavaScript para atualizar a interface a cada segundo.",

        "contact.title": "Contato",
        "contact.heading": "Vamos criar algo incrível juntos?",
        "contact.text": "Estou aberta a novas oportunidades, colaborações e desafios interessantes.",
        "contact.location": "Goiás, Brasil",
        "contact.github": "Ver meu GitHub",

        "form.name": "Nome",
        "form.email": "E-mail",
        "form.message": "Mensagem",
        "form.send": "Enviar",
        "form.sending": "Enviando...",
        "form.empty": "Preencha todos os campos antes de enviar.",
        "form.ok": "Mensagem enviada com sucesso!",
        "form.error": "Não foi possível enviar sua mensagem. Tente novamente.",

        "footer": "© {year} Ana Cristina Brito de Miranda. Todos os direitos reservados.",
    },

    en: {
        "meta.title": "Portfolio - Ana Cristina Brito",
        "meta.description": "Portfolio of Ana Cristina Brito, Internet Systems student. Projects, skills and contact.",
        "skip": "Skip to content",

        "logo.link": "Go to top",
        "nav.label": "Main navigation",
        "nav.menu": "Menu",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "lang.label": "Language",

        "home.aria": "Introduction",
        "home.photoAlt": "Profile photo of Ana Cristina Brito",
        "home.hello": "HELLO, I’M ANA.",
        "home.title": "Internet Systems<br>Student",
        "home.cta": "View Projects →",
        "home.desc": "Building modern web experiences while I keep learning and growing in the world of technology.",
        "home.social": "Social media",
        "home.lattes": "Lattes CV",

        "about.title": "About Me",
        "about.p1": "I’m Ana Cristina Brito de Miranda, an <strong class=\"texto-destaque\">Internet Systems</strong> student at UEG, building my career in technology. I’m currently developing my skills in programming, web development and databases while exploring different areas to find my specialization.",
        "about.p2": "Besides technology, I work as an English teacher, an experience that strengthened skills such as communication, organization and analytical thinking, which I bring to all my projects.",
        "about.photoAlt": "Photo of Ana Cristina Brito",

        "skills.title": "Skills",
        "skills.soon": "Coming soon...",
        "skills.soonAlt": "Technology coming soon",

        "projects.title": "Projects",
        "projects.stack": "Technologies used in the project",
        "projects.links": "Project links",
        "projects.live": "View live",
        "projects.wip": "Project in progress.",
        "projects.velodash.alt": "VeloDash preview",
        "projects.velodash.desc": "Interactive analytics dashboard for tracking operational and financial metrics in real time.",
        "projects.blackjack.alt": "BlackJack preview",
        "projects.blackjack.desc": "The classic card game “21” built for the browser, applying programming logic to deck handling and win conditions.",
        "projects.imc.name": "BMI Calculator",
        "projects.imc.alt": "BMI Calculator preview",
        "projects.imc.desc": "Interactive app that calculates the user’s Body Mass Index in real time, processing the data and returning instant visual feedback.",
        "projects.clock.name": "JS Clock",
        "projects.clock.alt": "JavaScript Clock preview",
        "projects.clock.desc": "A modern, dynamic clock that tracks time in real time, using JavaScript async functions to update the interface every second.",

        "contact.title": "Contact",
        "contact.heading": "Let’s build something amazing together?",
        "contact.text": "I’m open to new opportunities, collaborations and interesting challenges.",
        "contact.location": "Goiás, Brazil",
        "contact.github": "View my GitHub",

        "form.name": "Name",
        "form.email": "Email",
        "form.message": "Message",
        "form.send": "Send",
        "form.sending": "Sending...",
        "form.empty": "Please fill in all fields before sending.",
        "form.ok": "Message sent successfully!",
        "form.error": "Your message couldn’t be sent. Please try again.",

        "footer": "© {year} Ana Cristina Brito de Miranda. All rights reserved.",
    },
};


/* Idioma */

let idiomaAtual = CONFIG.idiomaPadrao;

/** Retorna o texto traduzido para a chave (com fallback em português). */
function t(chave) {
    const texto = TRADUCOES[idiomaAtual]?.[chave]
        ?? TRADUCOES[CONFIG.idiomaPadrao][chave]
        ?? chave;

    return texto.replace("{year}", new Date().getFullYear());
}

function lerIdiomaSalvo() {
    try {
        return localStorage.getItem(CONFIG.chaveStorage);
    } catch {
        return null;
    }
}

function salvarIdioma(idioma) {
    try {
        localStorage.setItem(CONFIG.chaveStorage, idioma);
    } catch {
        /* storage indisponível: segue sem persistir */
    }
}

/** Traduz todos os elementos marcados com data-i18n* e atualiza o <head>. */
function aplicarIdioma(idioma) {
    idiomaAtual = TRADUCOES[idioma] ? idioma : CONFIG.idiomaPadrao;

    document.documentElement.lang = idiomaAtual === "pt" ? "pt-BR" : idiomaAtual;
    document.title = t("meta.title");
    document.querySelector('meta[name="description"]')
        ?.setAttribute("content", t("meta.description"));

    // Texto simples
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });

    // Texto com marcação (<br>, <strong>), sempre vindo deste arquivo
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        el.innerHTML = t(el.dataset.i18nHtml);
    });

    // Atributos: data-i18n-attr="alt:chave;aria-label:outraChave"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        el.dataset.i18nAttr.split(";").forEach((par) => {
            const [atributo, chave] = par.split(":").map((s) => s.trim());
            el.setAttribute(atributo, t(chave));
        });
    });

    // Estado visual e acessível dos botões
    document.querySelectorAll(".idioma").forEach((botao) => {
        const ativo = botao.dataset.idioma === idiomaAtual;
        botao.classList.toggle("ativo", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
    });

    salvarIdioma(idiomaAtual);
}

function iniciarSeletorIdioma() {
    document.querySelectorAll(".idioma").forEach((botao) => {
        botao.addEventListener("click", () => aplicarIdioma(botao.dataset.idioma));
    });

    aplicarIdioma(lerIdiomaSalvo() || CONFIG.idiomaPadrao);
}


/* Navegação */

function iniciarMenuMobile() {
    const botao = document.querySelector(".botao-menu");
    const menu = document.getElementById("menu-navegacao");

    if (!botao || !menu) return;

    const definirAberto = (aberto) => {
        menu.classList.toggle("aberto", aberto);
        botao.setAttribute("aria-expanded", String(aberto));
    };

    botao.addEventListener("click", () => {
        definirAberto(botao.getAttribute("aria-expanded") !== "true");
    });

    // Fecha ao escolher um link
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => definirAberto(false));
    });

    // Fecha com Esc
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") definirAberto(false);
    });

    // Fecha ao voltar para o layout de desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > CONFIG.larguraMenuMobile) definirAberto(false);
    });
}

/* Destaca no menu o link da seção que está na tela. */
function iniciarSecaoAtiva() {
    const links = document.querySelectorAll('.link-navegacao[href^="#"]');

    if (!("IntersectionObserver" in window) || !links.length) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;

            links.forEach((link) => {
                const atual = link.getAttribute("href") === `#${entrada.target.id}`;

                if (atual) link.setAttribute("aria-current", "true");
                else link.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    links.forEach((link) => {
        const secao = document.querySelector(link.getAttribute("href"));
        if (secao) observador.observe(secao);
    });
}


/* Formulário de Contato (EmailsJS) */

function iniciarFormulario() {
    const formulario = document.getElementById("formulario_de_contato");
    const botaoEnviar = document.getElementById("botao");
    const mensagemStatus = document.getElementById("mensagem-status");

    if (!formulario || !botaoEnviar || !mensagemStatus) return;

    if (typeof emailjs === "undefined") {
        console.error("EmailJS não foi carregado.");
    } else {
        emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
    }

    let temporizador;

    // Exibe uma mensagem temporária 
    const exibirMensagem = (chave, tipo) => {
        clearTimeout(temporizador);

        mensagemStatus.textContent = t(chave);
        mensagemStatus.className = `mensagem-status ${tipo}`;

        temporizador = setTimeout(() => {
            mensagemStatus.textContent = "";
            mensagemStatus.className = "mensagem-status";
        }, CONFIG.tempoMensagemMs);
    };

    const alternarEnvio = (enviando) => {
        botaoEnviar.disabled = enviando;
        botaoEnviar.textContent = t(enviando ? "form.sending" : "form.send");
    };

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const dados = {
            name: formulario.elements.name.value.trim(),
            email: formulario.elements.email.value.trim(),
            message: formulario.elements.message.value.trim(),
        };

        if (!dados.name || !dados.email || !dados.message) {
            exibirMensagem("form.empty", "erro");
            return;
        }

        alternarEnvio(true);

        try {
            await emailjs.send(CONFIG.emailjs.serviceID, CONFIG.emailjs.templateID, dados);
            formulario.reset();
            exibirMensagem("form.ok", "sucesso");
        } catch (erro) {
            console.error("Erro ao enviar o e-mail:", erro);
            exibirMensagem("form.error", "erro");
        } finally {
            alternarEnvio(false);
        }
    });
}


/*
   Inicalização
  */

iniciarSeletorIdioma();
iniciarMenuMobile();
iniciarSecaoAtiva();
iniciarFormulario();
