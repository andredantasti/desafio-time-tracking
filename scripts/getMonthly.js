
import { getDados } from "./getDados.js";

async function getMonthly() {
    const data = await getDados();
    
    if (!Array.isArray(data)) {
    console.error("getMonthly: dados não são um array");
    return [];
  }

  const resultado = data.map(item => {
    const { current, previous } = item.timeframes.monthly;
    return {
      title: item.title,
      current,
      previous
    };
  });

  return resultado;
}

export { getMonthly };