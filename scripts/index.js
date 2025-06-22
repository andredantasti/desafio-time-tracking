
import { getDados } from "./getDados.js";
import { getDaily } from "./getDaily.js";
import { getMonthly } from "./getMonthly.js";
import { getWeekly } from "./getWeekly.js";


const btnDaily = document.getElementById("btn-daily");
console.log(btnDaily);
const btnWeekly = document.getElementById("btn-weekly");
console.log(btnWeekly);
const btnMonthly = document.getElementById("btn-monthly");
console.log(btnMonthly);

btnDaily.addEventListener("click", async function(event){
    event.preventDefault();

    const dados = await getDaily();

    console.log(dados)
    dados.forEach(item =>{
        const idBase = item.title.toLowerCase().replace(/\s/,'');

        const valorCurrent = document.getElementById(`${idBase}-hour`);
        const valorPrevious = document. getElementById(`${idBase}-last-hour`);
        
        if(valorCurrent){
            valorCurrent.textContent = `${item.current}hrs`;
        }

        if(valorPrevious){
           valorPrevious.textContent = `Last Daily - ${item.previous}hrs`;
        }
        
    })
  
})

btnWeekly.addEventListener("click", async function(event){
    event.preventDefault();

    const dados = await getWeekly();
  
   dados.forEach(item =>{
        const idBase = item.title.toLowerCase().replace(/\s/,'');

        const valorCurrent = document.getElementById(`${idBase}-hour`);
        const valorPrevious = document. getElementById(`${idBase}-last-hour`);
        
        if(valorCurrent){
            valorCurrent.textContent = `${item.current}hrs`;
        }

        if(valorPrevious){
            valorPrevious.textContent = `Last Weekly - ${item.previous}hrs`;
        }
        
    })

})

btnMonthly.addEventListener("click", async function(event) {
    event.preventDefault();
     const dados = await getMonthly();
  
   dados.forEach(item =>{
        const idBase = item.title.toLowerCase().replace(/\s/,'');

        const valorCurrent = document.getElementById(`${idBase}-hour`);
        const valorPrevious = document. getElementById(`${idBase}-last-hour`);
        
        if(valorCurrent){
            valorCurrent.textContent = `${item.current}hrs`;
        }

        if(valorPrevious){
            valorPrevious.textContent = `Last Monthly - ${item.previous}hrs`;
        }
        
    })
})

