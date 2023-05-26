# StopWatch

I made this website what it able to time, stop, restart and writedown below of buttons. Here you can "enjoy" time easily.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Building your project](#Building-your-project)

## Overview

### The challenge

The users should be able to:

- It abble to see time pass, hour, minute, second and miliseconde.
- Stop anytime the stopwatch.
- Restart the time.
- Writedown time bellow of buttons
- View the optimal layout depending on their device's screen size.

### Screenshot

- ![image](https://github.com/HelcioAnicio/StopWatch/assets/117602073/9d656566-06f0-4042-8144-baf5d1fa16ac)

### Links

- https://stop-watch-git-main-helcioanicio.vercel.app/

## My process

### Built with

- Semantic HTML5
- SASS
- Flexbox
- Responsiveness
- Media-queires
- JavaScript
- Conditional

### What I learned

First time i used setInterval, it was interesting because was necessary use events to call functions, after that all process happened. the logic is different from what i imagined, so i searched some things to get the better way to do.

```JS
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
```

### Continued development

I improve my knowledge with JS, so it's easier apply to next projects functions, methods and events.

### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/
https://edrodrigues.com.br/blog/settimeout-setinterval-e-como-agendar-tarefas-em-javascript/#:~:text=Cancelando%20setInterval,intervalo%20que%20voc%C3%AA%20deseja%20cancelar.

## Author

- Linkedin - https://www.linkedin.com/in/helcio-anicio/
- Vercel - https://vercel.com/helcioanicio

<!--
## Acknowledgments
 -->
