async function getDados() {
  try {
    const response = await fetch('https://andredantasti.github.io/desafio-time-tracking/data.json');
    const raw = await response.json();
    const data = Array.isArray(raw) ? raw : Object.values(raw);
    return data;
  } catch (error) {
    console.error("Erro getDados:", error);
    return []; // evita erro em quem usar a função
  }
}

export {getDados};