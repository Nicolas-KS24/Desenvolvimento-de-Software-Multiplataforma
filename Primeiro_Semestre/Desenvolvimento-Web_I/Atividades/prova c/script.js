const form = document.querySelector('form');
const resultado = document.getElementById('mensagemFinal');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // sem reload

    // check
    const nome = document.getElementById('name').value.trim();
    const nota = document.getElementById('nota').value;
    const feedback = document.getElementById('feedback').value.trim();
    const categoria = [...document.querySelectorAll('.Categoria input[type="checkbox"]:checked')];

    if(!nome || !nota || !feedback || categoria.length === 0){
        alert("Por favor, verifique se preencheu todos os campos (Nome Completo, Nota, Categoria, Feedback)");
        return;
    }

    // mensagem personalizada
    const nomeFormatado = nome.split(" ")[0]; // primeiro nome
    const categoriaSelecionada = categoria.map(C => C.value).join(", ");

    // emoji, cor por nota
    let emoji = '';
    let bgColor = '#ffffff'; // padrão, branco

    switch(nota){
        case '5':
          emoji = '😀';
          bgColor = '#28a745'; // verde
          break;
        case '4':
          emoji = '🙂';
          bgColor = '#5cb85c'; // verde médio
          break;
        case '3':
          emoji = '😐';
          bgColor = '#e6b800'; // amarelo
          break;
        case '2':
          emoji = '😟';
          bgColor = '#fd7e14'; // laranja
          break;
        case '1':
          emoji = '😢';
          bgColor = '#dc3545'; // vermelho
          break;
        default:
          emoji = '📝';
          bgColor = '#f5f5f5';
      }

    // mensagem
    resultado.style.display = 'block';
    resultado.style.backgroundColor = bgColor; // agora define o fundo
    resultado.style.color = '#000'; // texto sempre preto
    resultado.innerHTML = `
    <strong>Obrigado, ${nomeFormatado}!</strong><br>
    Recebemos sua nota <strong>${nota}</strong> ${emoji}<br>
    Categoria(s) selecionada(s): <em>${categoriaSelecionada}</em><br>
    Registramos seu feedback e agradecemos verdadeiramente pelo seu tempo tomado para compartilhar sua opinião conosco!
    `;

    // limpa
    form.reset();
    document.querySelectorAll('.Categoria label').forEach(label => label.classList.remove('selected'));
});
