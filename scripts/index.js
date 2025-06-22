
const btnDaily = document.getElementById("btn-daily");
console.log(btnDaily);
const btnWeekly = document.getElementById("btn-weekly");
console.log(btnWeekly);
const btnMonthly = document.getElementById("btn-monthly");
console.log(btnMonthly);

async function getDados() {
  try {
  const response = await fetch("http://localhost:5500/data.json");
  const data = await response.json();  
  return data;
  } catch (error) {
    console.error("Erro get data:", erro);
  } 
}

async function getDaily(){
    const data = await getDados();
    console.log(data);
    const resultado = data.map(item => {
      const { current, previous } = item.timeframes.daily;
      return{
        title: item.title,
        current,
        previous
      };
    });

    console.log(resultado);
    return resultado;
}

getDaily();

async function getMonthly() {
    const data = await getDados();
    
    const resultado = data.map(item => {
      const {current, previous} = item.timeframes.monthly;
      return {
        title: item.title,
        current,
        previous
      };
    });

    console.log(resultado);
    return resultado;
}

getMonthly();

async function getWeekly() {
    const data = await getDados();
    const resultado = data.map(item =>{
      const {current, previous} = item.timeframes.weekly;
      return {
        title: item.title,
        current,
        previous
      };
    });
    console.log(resultado);
    return resultado;
}

getWeekly();