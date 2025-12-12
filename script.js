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
