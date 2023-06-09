export function criarGrafico(elementId, label) {
  const graficoElement = document.getElementById(elementId);

  const grafico = new Chart(graficoElement, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: label,
          data: [],
          borderWidth: 1,
        },
      ],
    },
  });

  return grafico;
}

export function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(dados);
  });

  if (grafico.data.labels.length > 10) {
    grafico.data.labels.shift();
    grafico.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  grafico.update();
}
