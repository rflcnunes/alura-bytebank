const graficoDolar = document.getElementById("graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dólar",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});

async function conectaAPI() {
  const conecta = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  const conectaTraduzido = await conecta.json();
  const valorDolar = conectaTraduzido.USDBRL.high;

  adicionarDados(graficoParaDolar, geraHorario(), valorDolar);
}

function geraHorario() {
  let data = new Date();

  let hora =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

  return hora;
}

function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(dados);
  });

  grafico.update();
}

setInterval(conectaAPI, 5000);
setInterval(geraHorario, 1000);
