const Pw_head = document.querySelector('#pw-head');
const lenghtInput = document.querySelector('#lenght');
const upperInput = document.querySelector('#upper');
const lowerInput = document.querySelector('#lower');
const numberInput = document.querySelector('#number');
const symbolInput = document.querySelector('#symbol');
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
const pw = document.querySelector('.pw');

const textInput = document.querySelector('.alert')

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!£$%^&*()_+}{~@?><]["

function getUpperLetters() {
    return upperLetters[ Math.floor(Math.random() * upperLetters.length)]
}

function getLowerLetters() {
    return lowerLetters[ Math.floor(Math.random() * lowerLetters.length)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    let password = ""
    let len = lenghtInput.value;

    for (let i = 0; i < len;i++) {
        const X = generateX()

        password += X
    }

    Pw_head.innerHTML = password
}

function generateX() {
    const xs = []

    if (upperInput.checked) {
        xs.push(getUpperLetters())
    }
    if( lowerInput.checked ) {
        xs.push(getLowerLetters())
    }
    if(numberInput.checked) {
        xs.push(getNumbers())
    }
    if (symbolInput.checked) {
        xs.push(getSymbols())
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)]
}

generateBtn.addEventListener("click" , generatePassword)

copyBtn.addEventListener("click" , (e) => {
    const textarea = document.createElement('textarea')
    const password = Pw_head.innerHTML
    if(!password) return;
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    
    textInput.classList.add('open')
    setTimeout(() => {
        if( e.target ){
            textInput.innerHTML = 'password copied to clipboard'
        }

        textInput.classList.remove('open')
    }, 3000)

    if( e.target ){
        textInput.innerHTML = 'password copied to clipboard'
    }

})