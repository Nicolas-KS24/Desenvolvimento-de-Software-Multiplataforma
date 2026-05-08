
let result = null;
function load(concurso = "") {
    fetch(`http://localhost:3101/${concurso}`)
        .then(response => {
            if (!response.ok) throw new Error("Concurso não encontrado");
            return response.json();
        })
        .then(data => {
            result = data;
            const dataSorteio = new Date(data.data_do_sorteio);
            const dataFormatada = dataSorteio.toLocaleDateString("pt-BR");
            document.getElementById("title-concurso").innerText = `Concurso ${data.concurso} (${dataFormatada})`;
            document.getElementById("local").innerText = `Sorteio realizado em ${data.cidade_uf ?? "LOCAL NÃO INFORMADO"}`;
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`bola${i}`).innerText = data[`bola${i}`].toString().padStart(2, '0');
            }
            document.getElementById("estimativa-premio").innerText = `R$ ${formatarValor(data.estimativa_premio)}`;
            document.getElementById("acumulado-6-acertos").innerText = `R$ ${formatarValor(data.acumulado_6_acertos)}`;
            document.getElementById("acumulado-sorteio-especial-mega-da-virada").innerText = `R$ ${formatarValor(data.acumulado_sorteio_especial_mega_da_virada)}`;
            document.getElementById("ganhadores-6-acertos").innerText = data.ganhadores_6_acertos > 0
                ? `${data.ganhadores_6_acertos} apostas ganhadoras, R$ ${formatarValor(data.rateio_6_acertos)}`
                : "Não houve ganhadores";
            document.getElementById("ganhadores-5-acertos").innerText = `${data.ganhadores_5_acertos} apostas ganhadoras, R$ ${formatarValor(data.rateio_5_acertos)}`;
            document.getElementById("ganhadores-4-acertos").innerText = `${data.ganhadores_4_acertos} apostas ganhadoras, R$ ${formatarValor(data.rateio_4_acertos)}`;
            document.getElementById("arrecadacao-total").innerText = `R$ ${formatarValor(data.arrecadacao_total)}`;
            if (data.ganhadores_6_acertos > 0) {
                document.getElementById("acumulou").style.display = "none";
            } else {
                document.getElementById("acumulou").style.display = "block";
            }
        })
        .catch(error => {
            alert(error.message);
        });
}
function formatarValor(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
