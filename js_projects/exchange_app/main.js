//MAIN Option

const cashInit = document.querySelector('.cashin');
const cashResult = document.querySelector('.cashout');
const currInit = document.querySelector('#currencyin')
const currResult = document.querySelector('#currencyout')
const rate = document.querySelector('.rate')


const check =()=>{
    let from = currInit.value;
    let to = currResult.value;
    let api_key = `https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`;
    
    fetch(api_key)
    .then(response => response.json())
    .then(rates=>{
        let exchRate;
        if(from=="EUR"&&to=="EUR"){
            exchRate = 1;
        }else{
            exchRate = rates.rates[to];
        }
        rate.textContent = `1 ${from} = ${exchRate.toFixed(4)} ${to}`;
        cashResult.value = (cashInit.value*exchRate).toFixed(4);
    })
    .catch(err => console.error(err));
}
check();

const replaceValues = () =>{
    let temp = currInit.value;
    currInit.value = currResult.value;
    currResult.value = temp;
    check();
}