
const pagina = document.getElementById('pagina');
const emojiEl = document.getElementById('emoji');
const mensagemEl = document.getElementById('mensagem');
const temperaturaEl = document.getElementById('temperatura');
const btnAtualizar = document.getElementById('atualizar');

function gerarTemperatura() {
    return Math.floor(Math.random() * 46) - 5;
}

function atualizarTemperatura() {
    const temp = gerarTemperatura();
    let classe = '';
    let emoji = '';
    let msg = '';

    if (temp <= 5) {
        classe = 'frio';
        emoji = '❄️';
        msg = 'Frio';
    } else if (temp <= 20) {
        classe = 'agradavel';
        emoji = '🌤️';
        msg = 'Agradável';
    } else if (temp <= 30) {
        classe = 'quente';
        emoji = '☀️';
        msg = 'Quente';
    } else {
        classe = 'muito-quente';
        emoji = '🔥';
        msg = 'Muito quente';
    }

    if (pagina) pagina.className = classe;
    if (emojiEl) emojiEl.textContent = emoji;
    if (mensagemEl) mensagemEl.textContent = msg;
    if (temperaturaEl) temperaturaEl.textContent = `${temp} °C`;

    console.log(`Temperatura: ${temp}°C — ${msg}`);
}


if (btnAtualizar) btnAtualizar.addEventListener('click', atualizarTemperatura);


atualizarTemperatura();








