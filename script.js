// Configuração
const CONFIG = {
    API_URL: window.location.origin + '/api/salvar-resultado',
    VERSION: '2.0.0'
};

// ... (mantenha todo o código anterior igual, exceto a função enviarParaGoogleSheets) ...

// NOVA FUNÇÃO - Enviar para nosso backend
async function enviarResultado() {
    // Preparar dados no formato que o backend espera
    const respostasFormatadas = {};
    
    // Agrupar respostas por lição
    estado.respostas.forEach((resp, index) => {
        const licaoKey = estado.licaoAtual;
        if (!respostasFormatadas[licaoKey]) {
            respostasFormatadas[licaoKey] = [];
        }
        respostasFormatadas[licaoKey].push(resp.indiceSelecionado);
    });

    const dadosEnvio = {
        nome: aluno.nome,
        turma: aluno.turma,
        respostas: respostasFormatadas
    };

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosEnvio)
        });

        const resultado = await response.json();
        
        if (resultado.success) {
            console.log('✅ Nota calculada:', resultado.nota);
        } else {
            console.error('Erro ao salvar:', resultado.error);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
        // Pode salvar localmente e tentar depois se quiser
    }
}

// Modificar a função concluirAtividade
function concluirAtividade() {
    // Enviar dados para nosso backend
    enviarResultado();
    
    // Limpar dados locais
    localStorage.removeItem('quimicaDuolingoProgresso');
    
    // Mostrar tela de conclusão
    mudarTela('conclusao');
}

// ... todo o código anterior ...

// MODIFICAÇÃO: Sistema de notas local
function concluirAtividade() {
    // Calcular nota localmente
    const nota = calcularNotaLocal();
    
    // Salvar no localStorage para o professor ver
    const resultados = JSON.parse(localStorage.getItem('resultadosTurma') || '[]');
    resultados.push({
        nome: aluno.nome,
        turma: aluno.turma,
        nota: nota,
        data: new Date().toLocaleString()
    });
    localStorage.setItem('resultadosTurma', JSON.stringify(resultados));
    
    // Mostrar tela de conclusão
    document.getElementById('app').innerHTML = `
        <div class="tela-conclusao">
            <h1>🎉 Atividade Concluída!</h1>
            <p>Sua nota foi calculada: <strong>${nota.toFixed(1)}/10</strong></p>
            <button onclick="location.reload()" class="btn">Fazer Novamente</button>
            <br><br>
            <button onclick="verNotasTurma()" class="btn-secundario">
                <i class="fas fa-chalkboard-teacher"></i> Ver Notas da Turma
            </button>
        </div>
    `;
}

function calcularNotaLocal() {
    // Lógica simples de cálculo
    const totalQuestoes = estado.respostas.length;
    const acertos = estado.respostas.filter(r => r.indiceSelecionado === r.indiceCorreto).length;
    return (acertos / totalQuestoes) * 10;
}

function verNotasTurma() {
    const resultados = JSON.parse(localStorage.getItem('resultadosTurma') || '[]');
    
    let html = '<div class="painel-professor"><h2>📊 Notas da Turma</h2>';
    
    if (resultados.length === 0) {
        html += '<p>Nenhum resultado ainda.</p>';
    } else {
        html += '<table><tr><th>Nome</th><th>Turma</th><th>Nota</th><th>Data</th></tr>';
        resultados.forEach(r => {
            html += `<tr><td>${r.nome}</td><td>${r.turma}</td><td>${r.nota.toFixed(1)}</td><td>${r.data}</td></tr>`;
        });
        html += '</table>';
    }
    
    html += '<button onclick="location.reload()" class="btn">Voltar</button></div>';
    document.getElementById('app').innerHTML = html;
}

// Inicializar
document.addEventListener('DOMContentLoaded', carregarApp);
