//MAIN Option

const cashInit = document.querySelector('.cashin');
const cashResult = document.querySelector('.cashout');
const currInit = document.querySelector('#currencyin')
const currResult = document.querySelector('#currencyout')
const rate = document.querySelector('.rate')


async function fetchData(){
    let api_key = `http://data.fixer.io/api/latest?access_key=1af7c3d26a8325bef12a3ffb63645927&format=1`;
    let response = await fetch(api_key);
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
   }

let ratesInfo = fetchData();
let exchRate;

//Unfortunately i found only API with BASE EUR, without options

const check = ()=>{
    let from = currInit.value;
    let to = currResult.value;
    ratesInfo.then(data => { 
    if(from==to){
        exchRate = 1;
    }else{
        exchRate = data.rates[to];
    }
    rate.textContent = `1 ${from} = ${exchRate.toFixed(4)} ${to}`;
    cashResult.value = (cashInit.value*exchRate).toFixed(4);
})}
check();

const replaceValues = () =>{
    let temp = currInit.value;
    currInit.value = currResult.value;
    currResult.value = temp;
    check();
}