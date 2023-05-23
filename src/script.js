const display = document.querySelector('.display');
const hourDisplay = document.querySelector('.hour');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const milisecondsDisplay = document.querySelector('.miliseconds');

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const restart = document.querySelector('.restart')


let [hour,min,sec,mili] = [00,00,00,00]

hourDisplay.innerHTML = hour;
minutesDisplay.innerHTML = min;
secondsDisplay.innerHTML = sec;
milisecondsDisplay.innerHTML = mili;


function timer() {
    mili+= 10;  
    
}









//  EVENTS

start.addEventListener('click', () => {
    timer()
})