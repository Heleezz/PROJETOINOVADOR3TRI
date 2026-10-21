// ============================================================
// BioEletro - Script principal
// ============================================================

'use strict';

// ---------- Utilitário: executar quando o DOM estiver pronto ----------
function onReady(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Registra erros de script no console (evita falha silenciosa)
window.addEventListener('error', function (e) {
    console.error('Erro no script:', e.message);
});

// ============================================================
// 1. DADOS
// ============================================================

// Dados do Quiz
const quizData = [
    {
        id: 1,
        level: "Fundamentos",
        question: "A radiação emitida pelos telefones celulares é classificada como:",
        options: ["Ionizante", "Não ionizante", "Radioativa", "Nuclear"],
        correct: 1,
        explanation: "Celulares emitem radiofrequência, um tipo de radiação não ionizante. Isso significa que ela não possui energia suficiente para remover elétrons dos átomos ou quebrar ligações de DNA, diferentemente dos raios X.",
        reference: "OMS - Campos Eletromagnéticos e Saúde Pública"
    },
    {
        id: 2,
        level: "Fundamentos",
        question: "O que significa a sigla SAR?",
        options: ["Sistema de Antena de Rádio", "Taxa de Absorção Específica", "Sinal de Alerta de Radiação", "Segurança em Aparelhos de Rádio"],
        correct: 1,
        explanation: "SAR (Specific Absorption Rate) é a Taxa de Absorção Específica. Ela mede a quantidade de energia de radiofrequência absorvida por unidade de massa do tecido corporal, expressa em W/kg.",
        reference: "Anatel - Regulamento sobre exposição humana a campos eletromagnéticos"
    },
    {
        id: 3,
        level: "Fundamentos",
        question: "Qual é a principal diferença entre radiação ionizante e não ionizante?",
        options: ["A cor da radiação", "A capacidade de remover elétrons dos átomos", "A velocidade de propagação", "O tipo de antena utilizada"],
        correct: 1,
        explanation: "A radiação ionizante possui energia suficiente para remover elétrons dos átomos, podendo danificar o DNA diretamente. A não ionizante não possui essa energia.",
        reference: "IARC Monographs Volume 102"
    },
    {
        id: 4,
        level: "Fundamentos",
        question: "As ondas de rádio utilizadas pelos celulares estão localizadas em qual parte do espectro eletromagnético?",
        options: ["Raios X", "Luz visível", "Radiofrequência", "Raios gama"],
        correct: 2,
        explanation: "Celulares utilizam ondas de radiofrequência (RF), que estão na parte de baixa energia do espectro eletromagnético, junto com as ondas de rádio e micro-ondas.",
        reference: "OMS - Folha Informativa sobre Campos Eletromagnéticos"
    },
    {
        id: 5,
        level: "Fundamentos",
        question: "O que acontece com a potência de transmissão do celular quando o sinal da rede está fraco?",
        options: ["Diminui automaticamente", "Aumenta para manter a conexão", "Permanece constante", "Desliga o aparelho"],
        correct: 1,
        explanation: "Quando o sinal é fraco, o celular aumenta sua potência de transmissão para alcançar a antena mais distante, o que pode elevar temporariamente a exposição do usuário.",
        reference: "FCC - Radio Frequency Safety"
    },
    {
        id: 6,
        level: "Ciência e Saúde",
        question: "Em 2011, a IARC classificou os campos de radiofrequência como Grupo 2B. O que isso significa?",
        options: ["Cancerígeno comprovado para humanos", "Possivelmente carcinogênico para humanos", "Não cancerígeno", "Radioativo"],
        correct: 1,
        explanation: "Grupo 2B significa 'possivelmente carcinogênico para humanos'. Indica que há evidências limitadas em humanos e menos que suficientes em animais, não sendo uma prova de que causa câncer, mas um convite a mais pesquisas.",
        reference: "IARC Monographs Volume 102 (2013)"
    },
    {
        id: 7,
        level: "Ciência e Saúde",
        question: "Qual é o principal efeito biológico conhecido da radiofrequência em níveis encontrados no uso de celulares?",
        options: ["Mutação genética direta", "Aquecimento leve dos tecidos (efeito térmico)", "Alteração do sangue", "Destruição de células cerebrais"],
        correct: 1,
        explanation: "O único efeito biológico consistentemente demonstrado da radiofrequência em níveis de celulares é o aquecimento leve dos tecidos (efeito térmico), que o corpo humano dissipa facilmente.",
        reference: "OMS - Folha Informativa sobre Campos Eletromagnéticos"
    },
    {
        id: 8,
        level: "Ciência e Saúde",
        question: "O que é um estudo observacional?",
        options: ["Um estudo em laboratório com animais", "Um estudo que observa pessoas sem intervir", "Um estudo com placebo", "Um estudo de caso único"],
        correct: 1,
        explanation: "Estudos observacionais acompanham grupos de pessoas ao longo do tempo, observando associações entre exposições e desfechos, sem intervenção direta. Eles podem identificar correlações, mas não provam causalidade.",
        reference: "Metodologia de Pesquisa Científica - OMS"
    },
    {
        id: 9,
        level: "Ciência e Saúde",
        question: "Por que é difícil realizar estudos de longo prazo sobre os efeitos dos celulares?",
        options: ["Porque os celulares não emitem radiação", "Porque as pessoas não usam celulares", "Porque as tecnologias mudam rapidamente e os estudos levam décadas", "Porque não há interesse científico"],
        correct: 2,
        explanation: "As tecnologias de comunicação evoluem rapidamente (2G, 3G, 4G, 5G), tornando difícil generalizar resultados de estudos antigos. Além disso, estudos de longo prazo levam décadas para serem concluídos.",
        reference: "IARC - Limitações Metodológicas"
    },
    {
        id: 10,
        level: "Ciência e Saúde",
        question: "O que significa dizer que 'correlação não implica causalidade'?",
        options: ["Que dois eventos ocorrendo juntos não significa que um cause o outro", "Que a ciência está errada", "Que não existe relação entre os fenômenos", "Que apenas estudos laboratoriais são válidos"],
        correct: 0,
        explanation: "Correlação significa que dois eventos ocorrem juntos, mas isso não prova que um cause o outro. Pode haver outros fatores envolvidos ou pode ser coincidência. Causalidade requer evidências mais robustas.",
        reference: "Princípios de Epidemiologia - OMS"
    },
    {
        id: 11,
        level: "Interpretação",
        question: "Qual é a diferença entre perigo e risco?",
        options: ["Não há diferença", "Perigo é a capacidade de causar dano; risco é a probabilidade considerando a exposição", "Risco é sempre maior que perigo", "Perigo se aplica apenas a substâncias químicas"],
        correct: 1,
        explanation: "Perigo é a capacidade intrínseca de um agente causar dano. Risco considera a probabilidade de ocorrer dano nas condições reais de exposição. A água pode ser perigosa, mas o risco depende da quantidade e contexto.",
        reference: "Conceitos de Toxicologia - OMS"
    },
    {
        id: 12,
        level: "Interpretação",
        question: "Usar fones de ouvido ou o modo viva-voz durante chamadas longas é recomendado para:",
        options: ["Eliminar totalmente a radiação do ambiente", "Aumentar a velocidade da internet", "Reduzir a exposição da cabeça ao manter o aparelho afastado", "Melhorar a qualidade do microfone"],
        correct: 2,
        explanation: "Manter o celular afastado do corpo (usando viva-voz ou fones) reduz significativamente a exposição da cabeça, pois a intensidade do campo eletromagnético diminui rapidamente com a distância.",
        reference: "FDA - Radiation-Emitting Products: Cell Phones"
    },
    {
        id: 13,
        level: "Interpretação",
        question: "Um celular que não está em uma chamada nunca transmite sinais?",
        options: ["Verdadeiro, só transmite durante chamadas", "Falso, pode transmitir dados em background", "Depende do modelo do aparelho", "Apenas quando está carregando"],
        correct: 1,
        explanation: "Celulares modernos transmitem dados constantemente em background (notificações, sincronização, localização), mesmo quando não estão em uso ativo. A exposição não se limita apenas às chamadas.",
        reference: "Funcionamento de Redes Móveis - Anatel"
    },
    {
        id: 14,
        level: "Interpretação",
        question: "A classificação de um agente como 'possivelmente carcinogênico' (Grupo 2B) prova que ele causa câncer?",
        options: ["Sim, é uma confirmação definitiva", "Não, indica evidência limitada e necessidade de mais pesquisas", "Sim, mas apenas em altas doses", "Não, significa que é seguro"],
        correct: 1,
        explanation: "A classificação Grupo 2B indica evidência limitada de possível carcinogenicidade, não uma prova definitiva. Significa que há indícios, mas não conclusões, e que mais pesquisas são necessárias.",
        reference: "IARC - Classificações de Carcinogenicidade"
    },
    {
        id: 15,
        level: "Interpretação",
        question: "Qual medida pode reduzir a exposição à radiofrequência do celular?",
        options: ["Usar o celular apenas à noite", "Manter o aparelho próximo ao corpo", "Usar viva-voz ou fones de ouvido", "Aumentar o brilho da tela"],
        correct: 2,
        explanation: "Manter o aparelho afastado do corpo (viva-voz, fones ou colocá-lo sobre a mesa) reduz significativamente a exposição, pois a intensidade do campo eletromagnético cai rapidamente com a distância.",
        reference: "OMS - Recomendações de redução de exposição"
    }
];

// Dados do Espectro Eletromagnético
const spectrumData = {
    radio: {
        title: "Ondas de Rádio",
        text: "Maior faixa de comprimento de onda e menor frequência do espectro. Usadas em radiodifusão, TV e comunicações móveis. São radiação não ionizante."
    },
    microwave: {
        title: "Micro-ondas",
        text: "Usadas em fornos, Wi-Fi, Bluetooth e nas bandas de comunicação móvel (incluindo 4G/5G). Também são não ionizantes; o efeito conhecido é o aquecimento."
    },
    infrared: {
        title: "Infravermelho",
        text: "Radiação percebida principalmente como calor. Usada em controles remotos, câmeras térmicas e sensores. Não ionizante."
    },
    visible: {
        title: "Luz Visível",
        text: "Pequena faixa do espectro detectável pelo olho humano. É a única radiação eletromagnética que enxergamos diretamente. Não ionizante."
    },
    uv: {
        title: "Ultravioleta (UV)",
        text: "Frequência acima da luz violeta. Em altas doses pode danificar a pele e os olhos. Parte do UV já é considerada radiação ionizante."
    },
    xray: {
        title: "Raios X",
        text: "Radiação ionizante de alta energia, capaz de atravessar tecidos moles. Usada em diagnóstico médico com controle rigoroso de dose."
    },
    gamma: {
        title: "Raios Gama",
        text: "A radiação mais energética do espectro. Totalmente ionizante, originada em reações nucleares. Usada em radioterapia e esterilização."
    }
};

// Dados das regiões do corpo
const bodyData = {
    cabeca: {
        title: "Cabeça",
        text: "Ao colar o celular no ouvido, a região próxima ao aparelho absorve mais energia. Os tecidos com maior conteúdo de água são os que mais interagem com a radiofrequência, e o principal efeito observado é o aquecimento leve, dissipado pela circulação sanguínea."
    },
    tronco: {
        title: "Tronco",
        text: "Quando o celular é mantido no bolso ou contra o corpo, o tronco recebe a exposição. Por isso organizações de saúde recomendam manter o aparelho afastado do corpo em chamadas longas, usando viva-voz ou fones."
    },
    mao: {
        title: "Mãos e Braços",
        text: "Segurar o celular expõe principalmente as mãos, que estão relativamente afastadas dos órgãos vitais. A interação da radiofrequência com esses tecidos também se limita, em níveis típicos, a um leve efeito térmico."
    },
    pele: {
        title: "Pele e Pernas",
        text: "A pele é a camada que primeiro recebe a energia de radiofrequência. Grande parte da radiação é refletida ou absorvida nas camadas superficiais; a penetração em tecidos profundos é limitada, especialmente em frequências mais altas."
    }
};

// Dados dos Mitos e Verdades (cards são gerados via JavaScript)
const mythsData = [
    {
        statement: "Celulares causam câncer porque emitem radiação.",
        classification: "falso",
        label: "Mito",
        explanation: "A radiofrequência dos celulares é não ionizante: não tem energia suficiente para quebrar ligações químicas ou danificar o DNA diretamente. Até hoje, não há evidência consistente de que cause câncer nas condições normais de uso.",
        reference: "OMS - Campos Eletromagnéticos e Saúde Pública"
    },
    {
        statement: "\"Radiação\" é sempre sinônimo de radioatividade perigosa.",
        classification: "falso",
        label: "Mito",
        explanation: "Radiação eletromagnética inclui desde as ondas de rádio até a luz visível. A radioatividade (partículas alfa/beta/gama) é apenas um tipo específico. Toda matéria acima do zero absoluto emite radiação — inclusive o corpo humano.",
        reference: "FCC - Radio Frequency Safety"
    },
    {
        statement: "O celular aumenta a potência de transmissão quando o sinal está fraco.",
        classification: "verdadeiro",
        label: "Verdade",
        explanation: "Para manter a conexão com a torre mais distante, o aparelho eleva sua potência de transmissão. É por isso que áreas com pouco sinal podem resultar em maior exposição durante o uso.",
        reference: "Anatel - Campos Eletromagnéticos"
    },
    {
        statement: "Manter o celular afastado do corpo reduz a exposição.",
        classification: "verdadeiro",
        label: "Verdade",
        explanation: "A intensidade do campo eletromagnético diminui rapidamente com a distância. Usar viva-voz, fones ou deixar o aparelho sobre a mesa reduz significativamente a exposição da cabeça e do corpo.",
        reference: "OMS - Recomendações de redução de exposição"
    },
    {
        statement: "A classificação \"Grupo 2B\" da IARC prova que celulares causam câncer.",
        classification: "falso",
        label: "Mito",
        explanation: "O Grupo 2B significa \"possivelmente carcinogênico\": indica evidência limitada e a necessidade de mais pesquisas, não uma comprovação. Substâncias como o pepino em conserva e a cafeína já estiveram em categorias semelhantes.",
        reference: "IARC Monographs Volume 102"
    },
    {
        statement: "5G é mais perigoso para a saúde do que 4G porque usa frequências mais altas.",
        classification: "depende",
        label: "Depende do contexto",
        explanation: "As frequências usadas pelo 5G (inclusive ondas milimétricas) continuam sendo não ionizantes e penetram menos na pele que o 4G. Não há mecanismo físico conhecido de dano adicional; estudos de longo prazo ainda estão em andamento.",
        reference: "ICNIRP - Diretrizes de exposição RF (2020)"
    },
    {
        statement: "Modo avião reduz a emissão de radiofrequência do aparelho.",
        classification: "verdadeiro",
        label: "Verdade",
        explanation: "Ao desligar os transmissores de rádio (celular, Wi-Fi, Bluetooth), o celular praticamente deixa de emitir radiofrequência. É uma forma simples de reduzir a exposição, por exemplo, durante o sono com o aparelho próximo.",
        reference: "FDA - Radiation-Emitting Products: Cell Phones"
    },
    {
        statement: "Apps que \"bloqueiam radiação\" na tela do celular funcionam.",
        classification: "falso",
        label: "Mito",
        explanation: "Nenhum aplicativo pode alterar o hardware do transmissor de radiofrequência do aparelho. Aplicações que prometem \"reduzir radiação\" mexendo apenas na tela não têm qualquer efeito físico sobre a emissão de RF.",
        reference: "Anatel - Esclarecimentos sobre campos eletromagnéticos"
    },
    {
        statement: "A presença de radiofrequência no ambiente significa automaticamente risco à saúde.",
        classification: "falso",
        label: "Mito",
        explanation: "Risco depende da dose, da intensidade e das condições de exposição. Os limites internacionais (ICNIRP/Anatel) estabelecem margens muito abaixo dos níveis necessários para causar efeitos térmicos adversos.",
        reference: "ICNIRP / Anatel - Limites de exposição"
    }
];

// ============================================================
// 2. LÓGICA DO QUIZ
// ============================================================
let currentQuestion = 0;
let score = 0;

function getEl(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const el = getEl(id);
    if (el) el.textContent = value;
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    const intro = getEl('quiz-intro');
    const content = getEl('quiz-content');
    const result = getEl('quiz-result');
    if (intro) intro.style.display = 'none';
    if (result) result.style.display = 'none';
    if (content) content.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    if (!q) return;

    const total = quizData.length;
    setText('current-question', String(currentQuestion + 1));
    setText('total-questions', String(total));
    setText('quiz-level', q.level);
    setText('quiz-question', q.question);

    const fill = getEl('quiz-progress-fill');
    if (fill) fill.style.width = (((currentQuestion + 1) / total) * 100) + '%';

    const feedback = getEl('quiz-feedback');
    if (feedback) feedback.style.display = 'none';

    const optionsContainer = getEl('quiz-options');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    q.options.forEach(function (opt, index) {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.type = 'button';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', 'false');
        btn.textContent = opt;
        btn.addEventListener('click', function () {
            selectAnswer(index, btn);
        });
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(index, btn) {
    const q = quizData[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    // Bloqueia novas respostas após escolher
    options.forEach(function (o) { o.disabled = true; });

    const isCorrect = index === q.correct;
    if (isCorrect) {
        score++;
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        if (options[q.correct]) options[q.correct].classList.add('correct');
    }

    const feedback = getEl('quiz-feedback');
    const result = getEl('feedback-result');
    const explanation = getEl('feedback-explanation');
    const reference = getEl('feedback-reference');
    const nextBtn = getEl('next-question');

    if (result) result.textContent = isCorrect ? '✓ Correto!' : '✗ Incorreto.';
    if (explanation) explanation.textContent = q.explanation;
    if (reference) reference.textContent = 'Fonte: ' + q.reference;
    if (nextBtn) nextBtn.textContent = (currentQuestion === quizData.length - 1) ? 'Ver Resultado' : 'Próxima Questão';
    if (feedback) feedback.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const content = getEl('quiz-content');
    const result = getEl('quiz-result');
    if (content) content.style.display = 'none';
    if (result) result.style.display = 'block';

    const total = quizData.length;
    setText('final-score', String(score));
    setText('final-total', String(total));

    const percent = Math.round((score / total) * 100);
    let classification, message;

    if (percent >= 80) {
        classification = 'Excelente! 🏆';
        message = 'Você compreendeu bem a diferença entre evidências científicas e mitos sobre radiofrequência.';
    } else if (percent >= 50) {
        classification = 'Bom trabalho! 👍';
        message = 'Você tem uma boa base, mas vale revisar alguns conceitos. Explore as seções do site e tente novamente.';
    } else {
        classification = 'Continue estudando! 📚';
        message = 'Os conceitos de radiação e risco podem ser confusos. Reveja as seções "Entenda" e "Ciência" e refaça o quiz.';
    }

    setText('result-classification', classification);
    setText('result-message', message);
}

function restartQuiz() {
    startQuiz();
}

// ============================================================
// 3. ESPECTRO ELETROMAGNÉTICO INTERATIVO
// ============================================================
function initSpectrum() {
    const items = document.querySelectorAll('.spectrum-item');
    const infoBox = getEl('spectrum-info');
    if (!infoBox) return;

    items.forEach(function (item) {
        item.addEventListener('click', function () {
            const type = item.getAttribute('data-type');
            const data = spectrumData[type];
            if (!data) return;
            items.forEach(function (i) { i.classList.remove('active'); });
            item.classList.add('active');
            infoBox.innerHTML = '<h4>' + data.title + '</h4><p>' + data.text + '</p>';
        });
    });
}

// ============================================================
// 4. CORPO HUMANO INTERATIVO
// ============================================================
function initBody() {
    const parts = document.querySelectorAll('.body-part');
    const infoBox = getEl('body-info');
    if (!infoBox) return;

    function activate(part) {
        const region = part.getAttribute('data-region');
        const data = bodyData[region];
        if (!data) return;
        parts.forEach(function (p) { p.classList.remove('active'); });
        part.classList.add('active');
        infoBox.innerHTML = '<h4>' + data.title + '</h4><p>' + data.text + '</p>';
    }

    parts.forEach(function (part) {
        part.addEventListener('click', function () { activate(part); });
        part.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate(part);
            }
        });
    });
}

// ============================================================
// 5. MITOS E VERDADES (gera os cards e ativa o accordion)
// ============================================================
function initMyths() {
    const container = getEl('myths-container');
    if (!container) return;

    // Gera os cards dinamicamente (o HTML prevê inserção via JavaScript)
    mythsData.forEach(function (myth) {
        const card = document.createElement('div');
        card.className = 'myth-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-expanded', 'false');

        const statement = document.createElement('p');
        statement.className = 'myth-statement';
        statement.textContent = '"' + myth.statement + '"';

        const badge = document.createElement('span');
        badge.className = 'myth-classification ' + myth.classification;
        badge.textContent = myth.label;

        const explanation = document.createElement('div');
        explanation.className = 'myth-explanation';

        const expText = document.createElement('p');
        expText.textContent = myth.explanation;

        const ref = document.createElement('p');
        ref.className = 'myth-reference';
        ref.textContent = 'Fonte: ' + myth.reference;

        explanation.appendChild(expText);
        explanation.appendChild(ref);

        card.appendChild(statement);
        card.appendChild(badge);
        card.appendChild(explanation);
        container.appendChild(card);
    });

    // Comportamento de accordion
    const cards = container.querySelectorAll('.myth-card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('expanded');
            card.setAttribute('aria-expanded', card.classList.contains('expanded') ? 'true' : 'false');
        });
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ============================================================
// 6. LABORATÓRIO VIRTUAL (simuladores)
// ============================================================
function initLab() {
    // Simulador A: Distância
    const distanceSlider = getEl('distance-slider');
    const distanceBar = getEl('distance-bar');
    if (distanceSlider && distanceBar) {
        const updateDistance = function () {
            const d = Number(distanceSlider.value); // 1 a 50 cm
            // Modelo ilustrativo: a exposição relativa cai rapidamente com a distância
            const pct = Math.max(2, Math.min(100, Math.round(100 * (1 / Math.pow(d, 1.5)) * 30)));
            distanceBar.style.width = pct + '%';
            distanceSlider.setAttribute('aria-valuenow', String(d));
        };
        distanceSlider.addEventListener('input', updateDistance);
        updateDistance();
    }

    // Simulador B: Sinal
    const signalButtons = document.querySelectorAll('.lab-btn[data-signal]');
    const signalExplanation = getEl('signal-explanation');
    const signalTexts = {
        strong: 'Com sinal forte, o celular opera na potência mínima necessária, resultando na menor exposição possível.',
        medium: 'Com sinal médio, o celular ajusta a potência para um nível intermediário, equilibrando qualidade da conexão e consumo de energia.',
        weak: 'Com sinal fraco, o celular eleva sua potência de transmissão ao máximo para tentar alcançar a antena mais distante — nesse cenário a exposição do usuário é maior.'
    };
    signalButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            signalButtons.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            const key = btn.getAttribute('data-signal');
            if (signalExplanation && signalTexts[key]) {
                signalExplanation.textContent = signalTexts[key];
            }
        });
    });

    // Simulador C: Tempo
    const timeSlider = getEl('time-slider');
    const timeValue = getEl('time-value');
    if (timeSlider && timeValue) {
        const updateTime = function () {
            const t = Number(timeSlider.value);
            timeValue.textContent = t + ' minutos';
            timeSlider.setAttribute('aria-valuenow', String(t));
        };
        timeSlider.addEventListener('input', updateTime);
        updateTime();
    }
}

// ============================================================
// 7. MENU MOBILE
// ============================================================
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('active');
        btn.classList.toggle('active', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============================================================
// 8. PAINEL DE ACESSIBILIDADE
// ============================================================
function initAccessibility() {
    const toggleBtn = getEl('accessibility-toggle');
    const menu = getEl('accessibility-menu');
    const closeBtn = getEl('close-accessibility');
    const increaseBtn = getEl('increase-text');
    const decreaseBtn = getEl('decrease-text');
    const contrastBtn = getEl('toggle-contrast');
    const motionBtn = getEl('toggle-motion');
    const lineHeightBtn = getEl('toggle-line-height');
    const resetBtn = getEl('reset-accessibility');

    let fontSize = 100;

    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', function () {
            const isVisible = menu.style.display === 'flex' || menu.style.display === 'block';
            menu.style.display = isVisible ? 'none' : 'block';
            toggleBtn.setAttribute('aria-expanded', isVisible ? 'false' : 'true');
        });
    }
    if (closeBtn && menu) {
        closeBtn.addEventListener('click', function () {
            menu.style.display = 'none';
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        });
    }

    function applyFontSize() {
        document.documentElement.style.fontSize = fontSize + '%';
    }
    if (increaseBtn) {
        increaseBtn.addEventListener('click', function () {
            fontSize = Math.min(150, fontSize + 10);
            applyFontSize();
        });
    }
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', function () {
            fontSize = Math.max(80, fontSize - 10);
            applyFontSize();
        });
    }

    function bindSwitch(btn, className) {
        if (!btn) return;
        btn.addEventListener('click', function () {
            const active = document.body.classList.toggle(className);
            btn.setAttribute('aria-checked', active ? 'true' : 'false');
        });
    }
    bindSwitch(contrastBtn, 'high-contrast');
    bindSwitch(motionBtn, 'reduce-motion');
    bindSwitch(lineHeightBtn, 'big-line-height');

    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            fontSize = 100;
            applyFontSize();
            document.body.classList.remove('high-contrast', 'reduce-motion', 'big-line-height');
            [contrastBtn, motionBtn, lineHeightBtn].forEach(function (b) {
                if (b) b.setAttribute('aria-checked', 'false');
            });
        });
    }
}

// ============================================================
// 9. INICIALIZAÇÃO
// ============================================================
onReady(function () {
    try {
        initSpectrum();
        initBody();
        initMyths();
        initLab();
        initMobileMenu();
        initAccessibility();

        // Botões do quiz
        const startBtn = getEl('start-quiz');
        const nextBtn = getEl('next-question');
        const restartBtn = getEl('restart-quiz');
        if (startBtn) startBtn.addEventListener('click', startQuiz);
        if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
        if (restartBtn) restartBtn.addEventListener('click', restartQuiz);

        // Marca o carregamento (útil para CSS/depuração)
        document.body.classList.add('loaded');
    } catch (err) {
        console.error('Falha ao inicializar scripts:', err);
    }
});
