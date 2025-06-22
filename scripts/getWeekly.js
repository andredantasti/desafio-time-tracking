import { getDados } from "./getDados.js";

async function getWeekly() {
    const data = await getDados();

    if (!Array.isArray(data)) {
    console.error("getWeekly: dados não são um array");
    return [];
  }

  console.log(data);

  const resultado = data.map(item => {
    const { current, previous } = item.timeframes.weekly;
    return {
      title: item.title,
      current,
      previous
    };
  });

  console.log(typeof resultado);

  return resultado;
}

export { getWeekly };