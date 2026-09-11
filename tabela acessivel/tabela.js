let speechEnabled = true;
const synth = window.speechSynthesis;

// Função de Leitura por Voz
function speak(text) {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    synth.speak(utterance);
}

// Alternar Voz
function toggleSpeech() {
    speechEnabled = !speechEnabled;
    document.getElementById('speech-status').innerText = speechEnabled ? "ATIVADA" : "DESATIVADA";
    if (!speechEnabled) synth.cancel();
}

// Alternar Temas de Cores
function setTheme(theme) {
    document.body.classList.remove('theme-dark', 'theme-mono');
    if (theme === 'dark') {
        document.body.classList.add('theme-dark');
        speak("Tema alterado para Alto Contraste Preto e Amarelo");
    } else if (theme === 'mono') {
        document.body.classList.add('theme-mono');
        speak("Tema alterado para Monocromático");
    } else {
        speak("Tema alterado para Laranja e Azul");
    }
}

// Eventos de Interação
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-theme-default').addEventListener('click', () => setTheme('default'));
    document.getElementById('btn-theme-dark').addEventListener('click', () => setTheme('dark'));
    document.getElementById('btn-theme-mono').addEventListener('click', () => setTheme('mono'));
    document.getElementById('btn-toggle-speech').addEventListener('click', toggleSpeech);

    const cards = document.querySelectorAll('.element-card');
    const descriptionPanel = document.getElementById('element-description');

    cards.forEach(card => {
        const handleActivation = () => {
            const number = card.getAttribute('data-number');
            const symbol = card.getAttribute('data-symbol');
            const name = card.getAttribute('data-name');
            const mass = card.getAttribute('data-mass');
            const category = card.getAttribute('data-category');
            const curiosity = card.getAttribute('data-curiosity');

            const readText = `Elemento ${number}: ${name}. Símbolo ${symbol}. Categoria: ${category}. Massa: ${mass}. Curiosidade: ${curiosity}`;

            descriptionPanel.innerHTML = `
                <div>
                    <strong style="color: var(--accent-orange);">${name} (${symbol})</strong> — Nº: ${number} | Categoria: ${category} | Massa: ${mass}<br>
                    <span style="color: var(--accent-blue); font-size: 1.2rem;">💡 ${curiosity}</span>
                </div>
            `;

            speak(readText);
        };

        card.addEventListener('mouseenter', handleActivation);
        card.addEventListener('focus', handleActivation);
    });
});