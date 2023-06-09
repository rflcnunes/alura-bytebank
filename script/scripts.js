import imprimeCotacao from "./imprimeCotacao.js";

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

setInterval(geraHorario, 1000);

let workerDolar = new Worker("./script/workers/workerDolar.js");
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (e) => {
  let tempo = geraHorario();
  let valor = e.data.ask;

  imprimeCotacao("dolar", valor);
  adicionarDados(graficoParaDolar, tempo, valor);
});

const graficoIene = document.getElementById("graficoIene");
const graficoParaIene = new Chart(graficoIene, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Iene",
                data: [],
                borderWidth: 1,
            },
        ],
    },
});

let workerIene = new Worker("./script/workers/workerIene.js");
workerIene.postMessage("jpy");

workerIene.addEventListener("message", (e) => {
    let tempo = geraHorario();
    let valor = e.data.ask;

    imprimeCotacao("iene", valor);
    adicionarDados(graficoParaIene, tempo, valor);
});
    