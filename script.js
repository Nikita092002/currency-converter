// /currency-one,currency-two,amount-one,amount-two,rate,swap
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');
// const apiKey = '8cf354fb0d6bfc356a665646';

function calculate(){
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(` https://v6.exchangerate-api.com/v6/8cf354fb0d6bfc356a665646/latest/USD`)
    .then(res =>res.json())
    .then(data =>{
        const rateE = data.conversion_rates[currTwo];

        rate.innerText = `1 ${currOne} = ${rateE} ${currTwo}`; // Use currTwo here
        amountTwo.value = (amountOne.value * rateE).toFixed(2);
        console.log(data);
    })
}

currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})
calculate();