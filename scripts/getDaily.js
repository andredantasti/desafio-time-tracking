
import { getDados } from "./getDados.js";

async function getDaily() {
  const data = await getDados(); // agora sabemos que vem um array

  if (!Array.isArray(data)) {
    console.error("getDaily: dados não são um array");
    return [];
  }

  const resultado = data.map(item => {
    const { current, previous } = item.timeframes.daily;
    return {
      title: item.title,
      current,
      previous
    };
  });

  return resultado;
}

export { getDaily };