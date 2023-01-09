const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

   
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.textContent).then(() => {
        alert('Content copied to clipboard');
       
      },() => {
        alert('Failed to copy');
        
      });

    
})


generateEl.addEventListener('click', () => {

    if(lengthEl.value < 8){
        return alert("min chras are 8")
    }

     const lower = lowercaseEl.checked;
     const  upper = uppercaseEl.checked;
     const  number = symbolsEl.checked;
     const  length = lengthEl.value;
     const symbol = symbolsEl.checked;

     generatePassword(lower, upper, number, symbol, length)
    
})

function generatePassword(lower, upper, number, symbol, length) {

   
  let password =""


  while( password.length < length){
    if(lower ){
      password = password + randomFunc.lower() 
    } else {""}
    if(upper){
      password = password + randomFunc.upper() 
    } else {""}
    if(number){
      password = password +randomFunc.number() 
    } else {""}
    if(symbol){
      password = password + randomFunc.symbol()
    } else {""}
  }
 return resultEl.textContent = password
    
   
    
}

function getRandomLower() {
    const alphabetl = "abcdefghijklmnopqrstuvwxyz"

    return  alphabetl [Math.floor(Math.random() * alphabetl.length)]
   
}

function getRandomUpper() {
    const alphabetu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return  alphabetu [Math.floor(Math.random() * alphabetu.length)]
}

function getRandomNumber() {
    const num = "0123456789"
    return num[Math.floor(Math.random()*num.length)]
}

function getRandomSymbol() {
    const symbol = "!#$%^&*/-:^@~?<>"

    return symbol[Math.floor(Math.random()*symbol.length)]
}