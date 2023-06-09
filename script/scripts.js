import selecionaCotacao from "./imprimeCotacao.js";
import { criarGrafico, adicionarDados } from "./grafico.js";
import { criarWorker } from "./worker.js";

const graficoDolar = criarGrafico("graficoDolar", "Dólar");
const graficoIene = criarGrafico("graficoIene", "Iene");
const graficoEuro = criarGrafico("graficoEuro", "Euro");

const workerDolar = criarWorker("./script/workers/workerDolar.js", "usd");
const workerIene = criarWorker("./script/workers/workerIene.js", "jpy");
const workerEuro = criarWorker("./script/workers/workerEuro.js", "eur");

workerDolar.addEventListener("message", (e) => {
  const tempo = obterHorario();
  const valor = e.data.ask;

  selecionaCotacao("dolar", valor);
  adicionarDados(graficoDolar, tempo, valor);
});

workerIene.addEventListener("message", (e) => {
  const tempo = obterHorario();
  const valor = e.data.ask;

  selecionaCotacao("iene", valor);
  adicionarDados(graficoIene, tempo, valor);
});

workerEuro.addEventListener("message", (e) => {
  const tempo = obterHorario();
  const valor = e.data.ask;

  selecionaCotacao("euro", valor);
  adicionarDados(graficoEuro, tempo, valor);
});

function obterHorario() {
  const data = new Date();
  const hora = `${padZero(data.getHours())}:${padZero(
    data.getMinutes()
  )}:${padZero(data.getSeconds())}`;
  return hora;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
