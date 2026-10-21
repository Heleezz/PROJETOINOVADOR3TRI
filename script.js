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
        explanation: "Estudos observacionais acompanham grupos de pessoas ao longo do tempo, observando associações entre exposições e outcomes, sem intervenção direta. Eles podem identificar correlações, mas não provam causalidade.",
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
        options: ["Usar o celular apenas à noite", "Manter o aparelho próximo ao corpo", "Usar viva-