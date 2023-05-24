const display = document.querySelector('.display');
const hourDisplay = document.querySelector('.hour');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const milisecondsDisplay = document.querySelector('.miliseconds');

const start = document.querySelector('.start')
const writeDown = document.querySelector('.writeDown')
const stop = document.querySelector('.stop')
const restart = document.querySelector('.restart')

const times = document.querySelector('.times')

let stopWatch;
let [hours,minutes,seconds,miliseconds] = [0,0,0,0]

hourDisplay.innerHTML = `0${hours}`
minutesDisplay.innerHTML = `0${minutes}`
secondsDisplay.innerHTML = `0${seconds}`
milisecondsDisplay.innerHTML = `00${miliseconds}`




// FUNCTIONS
function buttonStart() {
    stopWatch = setInterval(() => { 
        timer()
    }, 10);
}


function timer() {
    miliseconds += 10;
    if (miliseconds == 1000) {
        miliseconds = 0;
        seconds ++;
    } 
    if (seconds == 60) {
        seconds = 00;
        minutes ++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours ++;
    }
    hours < 10 ? hourDisplay.innerHTML = `0${hours}` : hourDisplay.innerHTML = hours
    minutes < 10 ? minutesDisplay.innerHTML = `0${minutes}` : minutesDisplay.innerHTML = minutes
    seconds < 10 ? secondsDisplay.innerHTML = `0${seconds}` : secondsDisplay.innerHTML = seconds
    miliseconds < 100 ? milisecondsDisplay.innerHTML = `0${miliseconds}` : milisecondsDisplay.innerHTML = miliseconds
}


function buttonStop () {
    clearInterval(stopWatch)
}


function buttonRestart () {
    hours = 00
    minutes = 00
    seconds = 00
    miliseconds = 00

    hourDisplay.innerHTML = `0${hours}`
    minutesDisplay.innerHTML = `0${minutes}`
    secondsDisplay.innerHTML = `0${seconds}`
    milisecondsDisplay.innerHTML = `00${miliseconds}`

    clearInterval(stopWatch)
}

function writeContent () {
    let timerRegistred =`Tempo = ${hourDisplay.textContent}:${minutesDisplay.textContent}:${secondsDisplay.textContent}:${milisecondsDisplay.textContent}`
    let element = document.createElement('p')
    let elementContent = document.createTextNode(timerRegistred)
    element.appendChild(elementContent)
    times.appendChild(element) 
}



//  EVENTS
start.addEventListener('click', () => {
    buttonStart()
    start.disabled = true
});

stop.addEventListener('click', () => {
    buttonStop()
    start.disabled = false
})

restart.addEventListener('click', () => {
    buttonRestart()
    start.disabled = false
    times.innerText = ''
})

writeDown.addEventListener('click', () => {
    writeContent()
})