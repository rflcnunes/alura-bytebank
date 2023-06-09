export function criarWorker(workerPath, currencyCode) {
  const worker = new Worker(workerPath);
  worker.postMessage(currencyCode);
  return worker;
}
