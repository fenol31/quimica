// =============================================
// CONFIGURAÇÃO DO SISTEMA
// =============================================
const CONFIG = {
    VERSION: '1.0.0',
    TOTAL_LICOES: 4,
    QUESTÕES_POR_LIÇÃO: 5,
    NOTA_MAXIMA: 10
};

// =============================================
// BANCO DE DADOS DE CONTEÚDO
// =============================================
const BANCO_DE_QUESTOES = {
    acidos: {
        titulo: "🧪 Ácidos - Os Azedinhos",
        icone: "fa-lemon",
        texto: "Os ácidos são como os rebeldes da química! Eles têm sabor azedo, liberam íons H⁺ em água e adoram fazer bagunça com metais, produzindo hidrogênio. Você os encontra no limão (ácido cítrico), no vinagre (ácido acético) e até no seu refrigerante favorito (ácido fosfórico)!",
        questoes: [
            {
                pergunta: "Qual característica é TÍPICA dos ácidos?",
                opcoes: [
                    "Sabor adocicado como mel",
                    "Toque escorregadio como sabão",
                    "Sabor azedo como limão",
                    "Cor azul em papel de tornassol"
                ],
                correta: 2
            },
            {
                pergunta: "O que os ácidos liberam quando dissolvidos em água?",
                opcoes: [
                    "Íons OH⁻ (hidroxila)",
                    "Íons H⁺ (hidrogênio)",
                    "Elétrons livres",
                    "Átomos de oxigênio"
                ],
                correta: 1
            },
            {
                pergunta: "Qual destes alimentos contém naturalmente ácidos?",
                opcoes: [
                    "Azeite de oliva puro",
                    "Arroz branco cozido",
                    "Limão e laranja",
                    "Pão francês sem manteiga"
                ],
                correta: 2
            },
            {
                pergunta: "Como os ácidos reagem com a fenolftaleína?",
                opcoes: [
                    "Ficam com cor vermelha intensa",
                    "Mudam para cor azul escuro",
                    "Permanecem incolores (sem cor)",
                    "Adquirem cor verde fluorescente"
                ],
                correta: 2
            },
            {
                pergunta: "Qual NÃO é uma propriedade geral dos ácidos?",
                opcoes: [
                    "Conduzem corrente elétrica em solução aquosa",
                    "Reagem com bases formando sal e água",
                    "Possuem sabor adstringente (amarram a boca)",
                    "Reagem com metais produzindo gás hidrogênio"
                ],
                correta: 2
            }
        ]
    },
    bases: {
        titulo: "⚗️ Bases - Os Anti-Ácidos",
        icone: "fa-hand-holding-water",
        texto: "As bases são os pacificadores da química! Elas neutralizam os ácidos, têm sabor adstringente e toque escorregadio. O sabão que você usa, o leite de magnésia para azia e até a cal usada na construção civil são exemplos de bases em ação no seu dia a dia.",
        questoes: [
            {
                pergunta: "O que caracteriza uma base (hidróxido)?",
                opcoes: [
                    "Libera íons H⁺ (hidrogênio) em água",
                    "Libera íons OH⁻ (hidroxila) em água",
                    "Sempre tem pH menor que 7",
                    "Tem sabor azedo característico"
                ],
                correta: 1
            },
            {
                pergunta: "Qual destes é um exemplo comum de base?",
                opcoes: [
                    "Vinagre de maçã",
                    "Suco de laranja natural",
                    "Leite de magnésia (antiácido)",
                    "Refrigerante de cola"
                ],
                correta: 2
            },
            {
                pergunta: "Como as bases reagem com a fenolftaleína?",
                opcoes: [
                    "Ficam completamente incolores",
                    "Adquirem cor vermelha ou rosa",
                    "Mudam para azul profundo",
                    "Ficam amarelas como o sol"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a sensação ao toque das bases?",
                opcoes: [
                    "Áspero como lixa",
                    "Seco como areia",
                    "Escorregadio como sabão",
                    "Quente como fogo"
                ],
                correta: 2
            },
            {
                pergunta: "O que acontece quando uma base reage com um ácido?",
                opcoes: [
                    "Forma outra base mais forte",
                    "Forma sal e água (neutralização)",
                    "Libera gás hidrogênio explosivo",
                    "Não reagem - são inertes"
                ],
                correta: 1
            }
        ]
    },
    sais: {
        titulo: "🧂 Sais - Mais que Tempero",
        icone: "fa-mortar-pestle",
        texto: "Sais são os produtos da paz entre ácidos e bases! Quando eles se neutralizam, formam sal e água. O NaCl (sal de cozinha) é o mais famoso, mas existem sais coloridos, medicinais e até explosivos! O bicarbonato de sódio na sua cozinha é um sal que pode ser antiácido e fermento.",
        questoes: [
            {
                pergunta: "Como são formados os sais?",
                opcoes: [
                    "Ácido + Ácido = Sal forte",
                    "Base + Base = Sal duplo",
                    "Ácido + Base = Sal + Água",
                    "Metal + Não-metal = Sal puro"
                ],
                correta: 2
            },
            {
                pergunta: "Qual destes é um sal?",
                opcoes: [
                    "Ácido sulfúrico (H₂SO₄)",
                    "Hidróxido de sódio (NaOH)",
                    "Cloreto de sódio (NaCl)",
                    "Água destilada (H₂O)"
                ],
                correta: 2
            },
            {
                pergunta: "O que caracteriza os sais em relação à condutividade elétrica?",
                opcoes: [
                    "Não conduzem em nenhum estado físico",
                    "Conduzem apenas quando estão sólidos",
                    "Conduzem em solução aquosa ou quando fundidos",
                    "São isolantes perfeitos em qualquer situação"
                ],
                correta: 2
            },
            {
                pergunta: "Qual NÃO é uma propriedade geral dos sais?",
                opcoes: [
                    "Geralmente sólidos à temperatura ambiente",
                    "Altos pontos de fusão e ebulição",
                    "Conduzem corrente elétrica quando dissolvidos",
                    "Sabor adocicado característico"
                ],
                correta: 3
            },
            {
                pergunta: "Para que serve o sal NaHCO₃ (bicarbonato de sódio)?",
                opcoes: [
                    "Apenas para temperar alimentos",
                    "Exclusivamente para fabricação de vidro",
                    "Como antiácido estomacal e fermento na culinária",
                    "Só para produção de explosivos e fogos"
                ],
                correta: 2
            }
        ]
    },
    oxidos: {
        titulo: "🌪️ Óxidos - Oxigênio em Ação",
        icone: "fa-wind",
        texto: "Óxidos são compostos binários onde o oxigênio é o astro principal! Eles estão em todo lugar: na ferrugem do portão (óxido de ferro), no gás carbônico que você exala e até na cal usada nas paredes. Alguns são ácidos, outros básicos, e alguns são neutros como a água!",
        questoes: [
            {
                pergunta: "O que define um óxido?",
                opcoes: [
                    "Tem sempre oxigênio e hidrogênio juntos",
                    "É formado obrigatoriamente por oxigênio e um metal",
                    "É um composto binário que contém oxigênio",
                    "Sempre reage violentamente com água"
                ],
                correta: 2
            },
            {
                pergunta: "Qual destes é um óxido ácido?",
                opcoes: [
                    "Óxido de cálcio (CaO) - a cal virgem",
                    "Óxido de magnésio (MgO) - magnésia",
                    "Dióxido de carbono (CO₂) - gás carbônico",
                    "Óxido de sódio (Na₂O)"
                ],
                correta: 2
            },
            {
                pergunta: "O que é a ferrugem que aparece no ferro?",
                opcoes: [
                    "Óxido de cobre (CuO) verde",
                    "Óxido de alumínio (Al₂O₃) transparente",
                    "Óxido de ferro (Fe₂O₃) marrom-avermelhado",
                    "Óxido de prata (Ag₂O) preto"
                ],
                correta: 2
            },
            {
                pergunta: "Como o CO₂ (gás carbônico) reage com a água?",
                opcoes: [
                    "Forma ácido carbônico (H₂CO₃)",
                    "Forma hidróxido de carbono",
                    "Forma carbonato de sódio",
                    "Não reage - é insolúvel"
                ],
                correta: 0
            },
            {
                pergunta: "Qual óxido é usado na fabricação de cal para construção?",
                opcoes: [
                    "Dióxido de carbono (CO₂)",
                    "Óxido de cálcio (CaO) - cal virgem",
                    "Óxido de alumínio (Al₂O₃)",
                    "Dióxido de enxofre (SO₂)"
                ],
                correta: 1
            }
        ]
    }
};

// =============================================
// ESTADO DA APLICAÇÃO
// =============================================
let estado = {
    aluno: {
        nome: '',
        turma: '',
        codigoSessao: '',
        inicioSessao: null
    },
    progresso: {
        licaoAtual: 'acidos',
        questaoAtual: 0,
        licoesCompletadas: 0,
        questoesEmbaralhadas: [],
        respostas: [],
        ordemLicoes: ['acidos', 'bases', 'sais', 'oxidos']
    }
};

// =============================================
// FUNÇÕES DE INICIALIZAÇÃO
// =============================================
function iniciarAplicacao() {
    console.log('🚀 Iniciando aplicação...');
    
    // Gerar código único para a sessão
    estado.aluno.codigoSessao = gerarCodigoSessao();
    estado.aluno.inicioSessao = new Date().toISOString();
    
    // Tentar carregar progresso salvo
    carregarProgresso();
    
    // Mostrar tela inicial
    mostrarTelaIdentificacao();
    
    console.log('✅ Aplicação iniciada - Versão', CONFIG.VERSION);
}

function gerarCodigoSessao() {
    const caracteres = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

// =============================================
// GERENCIAMENTO DE TELAS
// =============================================
function mostrarTelaIdentificacao() {
    console.log('📝 Mostrando tela de identificação...');
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="tela ativa" id="tela-identificacao">
            <div class="logo">
                <i class="fas fa-flask"></i>
                <h1>Química Duolingo</h1>
            </div>
            <p class="subtitulo">Aprenda Funções Inorgânicas de forma divertida!</p>
            
            <div class="form-container">
                <div class="form-group">
                    <label for="nome"><i class="fas fa-user"></i> Nome Completo</label>
                    <input type="text" id="nome" placeholder="Digite seu nome completo" required>
                </div>
                
                <div class="form-group">
                    <label for="turma"><i class="fas fa-users"></i> Turma</label>
                    <input type="text" id="turma" placeholder="Ex: 1ºA, 2ºB, 3ºC, etc." required>
                </div>
                
                <button id="btn-iniciar" class="btn">
                    <i class="fas fa-play"></i> Começar Aventura Química
                </button>
                
                <div class="info-sessao">
                    <i class="fas fa-info-circle"></i>
                    <span>Sessão: ${estado.aluno.codigoSessao}</span>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar evento ao botão
    const btnIniciar = document.getElementById('btn-iniciar');
    if (btnIniciar) {
        btnIniciar.addEventListener('click', processarIdentificacao);
        console.log('✅ Botão "Iniciar" configurado');
    } else {
        console.error('❌ Botão "Iniciar" não encontrado!');
    }
    
    // Permitir enviar com Enter
    const nomeInput = document.getElementById('nome');
    const turmaInput = document.getElementById('turma');
    
    if (nomeInput && turmaInput) {
        nomeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                turmaInput.focus();
            }
        });
        
        turmaInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processarIdentificacao();
            }
        });
    }
}

function processarIdentificacao() {
    console.log('🔍 Processando identificação...');
    
    const nomeInput = document.getElementById('nome');
    const turmaInput = document.getElementById('turma');
    
    if (!nomeInput || !turmaInput) {
        console.error('❌ Campos de entrada não encontrados!');
        mostrarToast('Erro: Campos não encontrados', 'erro');
        return;
    }
    
    const nome = nomeInput.value.trim();
    const turma = turmaInput.value.trim();
    
    console.log('📋 Dados:', { nome, turma });
    
    if (!nome || !turma) {
        mostrarToast('Por favor, preencha seu nome e turma!', 'aviso');
        return;
    }
    
    if (nome.length < 3) {
        mostrarToast('Por favor, digite seu nome completo (mínimo 3 caracteres)', 'aviso');
        return;
    }
    
    estado.aluno.nome = nome;
    estado.aluno.turma = turma;
    
    console.log('✅ Aluno registrado:', estado.aluno.nome);
    
    // Salvar progresso
    salvarProgresso();
    
    // Iniciar primeira lição
    estado.progresso.licaoAtual = estado.progresso.ordemLicoes[0];
    mostrarTelaIntroducao(estado.progresso.licaoAtual);
}

function mostrarTelaIntroducao(licaoKey) {
    console.log('📚 Mostrando introdução da lição:', licaoKey);
    
    const licao = BANCO_DE_QUESTOES[licaoKey];
    if (!licao) {
        console.error('❌ Lição não encontrada:', licaoKey);
        return;
    }
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="tela ativa" id="tela-introducao">
            <div class="topo">
                <span id="indicador-licao">Lições: ${estado.progresso.licoesCompletadas + 1}/${CONFIG.TOTAL_LICOES}</span>
                <div class="progresso-container">
                    <div class="progresso-bar" id="progresso-bar" style="width: ${(estado.progresso.licoesCompletadas / CONFIG.TOTAL_LICOES) * 100}%"></div>
                </div>
            </div>
            
            <div class="conteudo-licao">
                <div class="icone-topico">
                    <i class="fas ${licao.icone}"></i>
                </div>
                <h2>${licao.titulo}</h2>
                <div class="texto-explicativo">
                    ${licao.texto}
                </div>
                
                <div class="dica-licao">
                    <i class="fas fa-lightbulb"></i>
                    <div>
                        <strong>Dica:</strong> Leia com atenção! Você terá ${CONFIG.QUESTÕES_POR_LIÇÃO} questões sobre este tema.
                    </div>
                </div>
                
                <button id="btn-comecar-questoes" class="btn">
                    <i class="fas fa-question-circle"></i> Vamos às Questões!
                </button>
                
                <button onclick="voltarParaIdentificacao()" class="btn-voltar">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>
        </div>
    `;
    
    const btnComecarQuestoes = document.getElementById('btn-comecar-questoes');
    if (btnComecarQuestoes) {
        btnComecarQuestoes.addEventListener('click', () => {
            console.log('🎯 Iniciando questões da lição:', licaoKey);
            prepararQuestoes(licaoKey);
            mostrarTelaQuestao();
        });
    }
}

function voltarParaIdentificacao() {
    mostrarTelaIdentificacao();
}

function prepararQuestoes(licaoKey) {
    console.log('🔄 Preparando questões para:', licaoKey);
    
    const licao = BANCO_DE_QUESTOES[licaoKey];
    
    // Embaralhar questões
    estado.progresso.questoesEmbaralhadas = embaralharArray([...licao.questoes]);
    
    // Embaralhar opções dentro de cada questão
    estado.progresso.questoesEmbaralhadas.forEach((questao, index) => {
        const opcoesOriginal = [...questao.opcoes];
        const corretaOriginal = questao.correta;
        const respostaCorreta = opcoesOriginal[corretaOriginal];
        
        // Embaralhar opções
        const opcoesEmbaralhadas = embaralharArray(opcoesOriginal);
        
        // Encontrar novo índice da resposta correta
        const novoIndiceCorreto = opcoesEmbaralhadas.indexOf(respostaCorreta);
        
        // Atualizar questão
        estado.progresso.questoesEmbaralhadas[index] = {
            ...questao,
            opcoes: opcoesEmbaralhadas,
            correta: novoIndiceCorreto
        };
    });
    
    // Reiniciar contadores
    estado.progresso.questaoAtual = 0;
    estado.progresso.respostas = [];
    
    console.log(`✅ ${estado.progresso.questoesEmbaralhadas.length} questões preparadas`);
}

function mostrarTelaQuestao() {
    console.log('❓ Mostrando questão:', estado.progresso.questaoAtual + 1);
    
    const questaoAtual = estado.progresso.questoesEmbaralhadas[estado.progresso.questaoAtual];
    if (!questaoAtual) {
        console.error('❌ Questão não encontrada!');
        return;
    }
    
    const totalQuestoes = estado.progresso.questoesEmbaralhadas.length;
    const progressoPercent = ((estado.progresso.questaoAtual) / totalQuestoes) * 100;
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="tela ativa" id="tela-questao">
            <div class="topo">
                <span id="contador-questao">
                    Questão ${estado.progresso.questaoAtual + 1}/${totalQuestoes}
                    <small>${estado.progresso.licaoAtual.toUpperCase()}</small>
                </span>
                <div class="progresso-container">
                    <div class="progresso-bar" id="progresso-questao" style="width: ${progressoPercent}%"></div>
                </div>
            </div>
            
            <div class="questao-container">
                <h3 id="texto-questao">${questaoAtual.pergunta}</h3>
                
                <div id="opcoes-container" class="opcoes-container">
                    <!-- Opções serão inseridas por JavaScript -->
                </div>
                
                <div class="controles">
                    <button id="btn-proxima" class="btn btn-proxima" disabled>
                        <i class="fas fa-arrow-right"></i> Próxima Questão
                    </button>
                    
                    <button onclick="voltarParaIntroducao()" class="btn-voltar">
                        <i class="fas fa-book"></i> Revisar Conteúdo
                    </button>
                </div>
            </div>
        </div>
    `;
    
    renderizarOpcoes(questaoAtual.opcoes);
    
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.addEventListener('click', processarProximaQuestao);
    }
}

function voltarParaIntroducao() {
    mostrarTelaIntroducao(estado.progresso.licaoAtual);
}

function renderizarOpcoes(opcoes) {
    const container = document.getElementById('opcoes-container');
    if (!container) {
        console.error('❌ Container de opções não encontrado!');
        return;
    }
    
    container.innerHTML = '';
    
    opcoes.forEach((opcao, index) => {
        const letra = String.fromCharCode(65 + index); // A, B, C, D
        const opcaoElement = document.createElement('div');
        opcaoElement.className = 'opcao';
        opcaoElement.dataset.index = index;
        opcaoElement.innerHTML = `
            <div class="opcao-conteudo">
                <span class="opcao-letra">${letra}</span>
                <span class="opcao-texto">${opcao}</span>
            </div>
        `;
        
        opcaoElement.addEventListener('click', () => selecionarOpcao(index));
        container.appendChild(opcaoElement);
    });
    
    console.log(`✅ ${opcoes.length} opções renderizadas`);
}

function selecionarOpcao(indiceSelecionado) {
    console.log('🎯 Opção selecionada:', indiceSelecionado);
    
    // Remover seleção anterior
    document.querySelectorAll('.opcao').forEach(op => {
        op.classList.remove('selecionada');
    });
    
    // Marcar como selecionada
    const opcaoElement = document.querySelector(`.opcao[data-index="${indiceSelecionado}"]`);
    if (opcaoElement) {
        opcaoElement.classList.add('selecionada');
    }
    
    // Habilitar botão próxima
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.disabled = false;
    }
    
    // Armazenar resposta
    const questaoAtual = estado.progresso.questoesEmbaralhadas[estado.progresso.questaoAtual];
    estado.progresso.respostas[estado.progresso.questaoAtual] = {
        indiceSelecionado: indiceSelecionado,
        indiceCorreto: questaoAtual.correta,
        acertou: indiceSelecionado === questaoAtual.correta,
        timestamp: new Date().toISOString()
    };
    
    // Salvar progresso
    salvarProgresso();
}

function processarProximaQuestao() {
    console.log('➡️ Processando próxima questão...');
    
    const totalQuestoes = estado.progresso.questoesEmbaralhadas.length;
    
    if (estado.progresso.questaoAtual < totalQuestoes - 1) {
        estado.progresso.questaoAtual++;
        mostrarTelaQuestao();
    } else {
        // Lição concluída
        estado.progresso.licoesCompletadas++;
        console.log(`✅ Lição ${estado.progresso.licoesCompletadas}/${CONFIG.TOTAL_LICOES} concluída`);
        
        if (estado.progresso.licoesCompletadas < estado.progresso.ordemLicoes.length) {
            // Próxima lição
            const proximaLicao = estado.progresso.ordemLicoes[estado.progresso.licoesCompletadas];
            estado.progresso.licaoAtual = proximaLicao;
            mostrarTelaIntroducao(proximaLicao);
        } else {
            // Todas as lições concluídas
            console.log('🎉 Todas as lições concluídas!');
            concluirAtividade();
        }
    }
    
    salvarProgresso();
}

function concluirAtividade() {
    estado.aluno.fimSessao = new Date().toISOString();
    mostrarTelaConclusao();
}

// =============================================
// FUNÇÕES DE CÁLCULO
// =============================================
function calcularNota() {
    const totalQuestoes = estado.progresso.respostas.length;
    if (totalQuestoes === 0) return 0;
    
    const acertos = estado.progresso.respostas.filter(r => r.acertou).length;
    const nota = (acertos / totalQuestoes) * CONFIG.NOTA_MAXIMA;
    return Math.min(nota, CONFIG.NOTA_MAXIMA);
}

function obterAcertos() {
    return estado.progresso.respostas.filter(r => r.acertou).length;
}

// =============================================
// TELA DE CONCLUSÃO
// =============================================
function mostrarTelaConclusao() {
    const nota = calcularNota();
    const acertos = obterAcertos();
    const totalQuestoes = estado.progresso.respostas.length;
    
    console.log(`📊 Resultado final: ${nota.toFixed(1)}/10 (${acertos}/${totalQuestoes} acertos)`);
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="tela ativa" id="tela-conclusao">
            <div class="conclusao-container">
                <div class="conclusao-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h2>🎉 Missão Cumprida!</h2>
                
                <div class="nota-final">
                    <div class="nota-circulo">
                        <span class="nota-valor">${nota.toFixed(1)}</span>
                        <span class="nota-max">/10</span>
                    </div>
                    <p class="nota-mensagem">${obterMensagemNota(nota)}</p>
                </div>
                
                <div class="estatisticas">
                    <div class="estatistica">
                        <i class="fas fa-check-circle"></i>
                        <span>${acertos} de ${totalQuestoes} acertos</span>
                    </div>
                    <div class="estatistica">
                        <i class="fas fa-clock"></i>
                        <span>Tempo: ${calcularTempoGasto()}</span>
                    </div>
                </div>
                
                <div class="acoes-conclusao">
                    <button onclick="reiniciarAtividade()" class="btn">
                        <i class="fas fa-redo"></i> Fazer Novamente
                    </button>
                    
                    <button onclick="exportarResultados()" class="btn btn-secundario">
                        <i class="fas fa-download"></i> Exportar Resultados
                    </button>
                    
                    <button onclick="mostrarPainelProfessor()" class="btn btn-terciario">
                        <i class="fas fa-chalkboard-teacher"></i> Painel do Professor
                    </button>
                </div>
                
                <div class="info-exportacao">
                    <i class="fas fa-info-circle"></i>
                    <span>Seu resultado foi salvo localmente</span>
                </div>
            </div>
        </div>
    `;
    
    // Salvar resultado
    salvarResultadoLocal(nota, acertos, totalQuestoes);
}

function obterMensagemNota(nota) {
    if (nota >= 9) return "Excelente! Você dominou as funções inorgânicas! 🎯";
    if (nota >= 7) return "Muito bom! Você entendeu bem os conceitos! 👍";
    if (nota >= 5) return "Bom trabalho! Continue estudando! 📚";
    return "Que tal revisar o conteúdo e tentar novamente? 💪";
}

function calcularTempoGasto() {
    if (!estado.aluno.inicioSessao || !estado.aluno.fimSessao) return "0 min";
    
    const inicio = new Date(estado.aluno.inicioSessao);
    const fim = new Date(estado.aluno.fimSessao);
    const diffMs = fim - inicio;
    const diffMins = Math.floor(diffMs / 60000);
    
    return diffMins < 1 ? "Menos de 1 minuto" : `${diffMins} minutos`;
}

// =============================================
// FUNÇÕES DE ARMAZENAMENTO
// =============================================
function salvarProgresso() {
    const dados = {
        aluno: estado.aluno,
        progresso: estado.progresso,
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('quimicaDuolingo_progresso', JSON.stringify(dados));
        console.log('💾 Progresso salvo');
    } catch (e) {
        console.warn('Não foi possível salvar o progresso:', e);
    }
}

function carregarProgresso() {
    try {
        const salvo = localStorage.getItem('quimicaDuolingo_progresso');
        if (salvo) {
            const dados = JSON.parse(salvo);
            
            // Carregar dados do aluno se existirem
            if (dados.aluno && dados.aluno.nome) {
                estado.aluno = { ...estado.aluno, ...dados.aluno };
                console.log('📂 Progresso carregado para:', estado.aluno.nome);
            }
            
            // Carregar progresso se a sessão for recente (últimas 24h)
            if (dados.progresso && dados.timestamp) {
                const dataSalvo = new Date(dados.timestamp);
                const agora = new Date();
                const diffHoras = (agora - dataSalvo) / (1000 * 60 * 60);
                
                if (diffHoras < 24) { // Menos de 24 horas
                    estado.progresso = dados.progresso;
                    console.log('🔄 Progresso restaurado');
                }
            }
        }
    } catch (e) {
        console.warn('Erro ao carregar progresso:', e);
    }
}

function salvarResultadoLocal(nota, acertos, totalQuestoes) {
    const resultado = {
        id: Date.now(),
        aluno: estado.aluno,
        nota: nota,
        acertos: acertos,
        totalQuestoes: totalQuestoes,
        data: new Date().toLocaleString('pt-BR'),
        timestamp: new Date().toISOString()
    };
    
    try {
        // Obter resultados existentes
        const resultados = JSON.parse(localStorage.getItem('quimicaDuolingo_resultados') || '[]');
        
        // Adicionar novo resultado
        resultados.push(resultado);
        
        // Manter apenas os últimos 100 resultados
        const resultadosLimitados = resultados.slice(-100);
        
        // Salvar
        localStorage.setItem('quimicaDuolingo_resultados', JSON.stringify(resultadosLimitados));
        
        console.log('✅ Resultado salvo localmente');
    } catch (e) {
        console.error('Erro ao salvar resultado:', e);
    }
}

// =============================================
// FUNÇÕES AUXILIARES
// =============================================
function embaralharArray(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

function reiniciarAtividade() {
    // Manter apenas informações do aluno
    const alunoInfo = {
        nome: estado.aluno.nome,
        turma: estado.aluno.turma,
        codigoSessao: gerarCodigoSessao(),
        inicioSessao: new Date().toISOString()
    };
    
    // Resetar estado
    estado = {
        aluno: alunoInfo,
        progresso: {
            licaoAtual: 'acidos',
            questaoAtual: 0,
            licoesCompletadas: 0,
            questoesEmbaralhadas: [],
            respostas: [],
            ordemLicoes: ['acidos', 'bases', 'sais', 'oxidos']
        }
    };
    
    // Limpar progresso salvo
    localStorage.removeItem('quimicaDuolingo_progresso');
    
    // Reiniciar
    mostrarTelaIdentificacao();
}

// =============================================
// INICIALIZAÇÃO
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM carregado, iniciando aplicação...');
    
    // Remover tela de carregamento
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';
    }
    
    // Iniciar aplicação
    iniciarAplicacao();
    
    // Configurar função global de toast
    window.mostrarToast = mostrarToast;
});

// =============================================
// FUNÇÃO TOAST (simplificada)
// =============================================
function mostrarToast(mensagem, tipo = 'info') {
    console.log(`📢 Toast [${tipo}]:`, mensagem);
    
    // Mostrar alerta simples se o toast não existir
    if (tipo === 'erro' || tipo === 'aviso') {
        alert(mensagem);
    }
}

// =============================================
// FUNÇÕES GLOBAIS
// =============================================
// Tornar funções disponíveis globalmente
window.voltarParaIdentificacao = voltarParaIdentificacao;
window.voltarParaIntroducao = voltarParaIntroducao;
window.reiniciarAtividade = reiniciarAtividade;
window.mostrarToast = mostrarToast;

// Para debugging
console.log('🧪 Script.js carregado com sucesso!');
