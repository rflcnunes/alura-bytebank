const list = document.querySelectorAll("[data-lista]");

function selecionaCotacao(nome, valor) {
  list.forEach((listaEscolhida) => {
    if (listaEscolhida.id == nome) {
      imprimeCotacao(listaEscolhida, nome, valor);
    }
  });
}

function imprimeCotacao(lista, nome, valor) {
  lista.innerHTML = "";
  const plurais = {
    dolar: "dólares",
    iene: "ienes",
    euro: "euros",
  };

  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    const listaItem = document.createElement("li");
    const moedaPlural = multiplicador === 1 ? nome : plurais[nome];
    const cotacao = (valor * multiplicador).toFixed(2);
    listaItem.textContent = `${multiplicador} ${moedaPlural}: R$${cotacao}`;
    lista.appendChild(listaItem);
  }
}

export default selecionaCotacao;
