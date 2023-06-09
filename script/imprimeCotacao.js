const list = document.querySelector("[data-lista]");

function imprimeCotacao(nome, valor) {
  list.innerHTML = "";

  for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${nome} ${multiplicador} = ${(
      valor * multiplicador
    ).toFixed(2)}`;

    list.appendChild(listItem);
  }
}

export default imprimeCotacao;
