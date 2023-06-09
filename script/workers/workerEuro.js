async function conectaAPI() {
  const conecta = await fetch(
    "https://economia.awesomeapi.com.br/last/EUR-BRL"
  );
  const conectaTraduzido = await conecta.json();
  postMessage(conectaTraduzido.EURBRL);
}

addEventListener("message", () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 2000);
});
