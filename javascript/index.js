const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById("btnLeft");
const btnRightElement = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");
const milDecElement = document.getElementById("milDec");
const milUniElement = document.getElementById("milUni");
const splitsElement = document.getElementById("splits");

let status_btn = 'stopped'
let value = 1
// chronometer.start()

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const min = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  // 0<-- 0:00
  minDecElement.innerText = min[0]
  // 0 -->0 --:00
  minUniElement.innerText = min[1]
}

function printSeconds() {
  const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  // 00: -->00
  secDecElement.innerText = sec[0]
  // 00:0 -->0
  secUniElement.innerText = sec[1]
}

// ==> BONUS
function printMilliseconds() {
  const milisec = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())
  //0<-- 0
  milDecElement.innerText = milisec[0]
  //0 -->0
  milUniElement.innerText = milisec[1]
}

function printSplit() {
  splitsElement.insertAdjacentHTML('beforeend',`<li value="${value}">${minDecElement.innerText}${minUniElement.innerText}:${secDecElement.innerText}${secUniElement.innerText}:${milDecElement.innerText}${milUniElement.innerText}</li>`)
  value++
}

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  status_btn = 'stopped'
  btnLeftElement.classList.replace("stop","start")
  btnLeftElement.innerText = "START"
  btnRightElement.classList.replace("reset","split")
  btnRightElement.innerText = "RESET"
  chronometer.stop()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  status_btn = 'running'
  btnLeftElement.classList.replace("start","stop")
  btnLeftElement.innerText = "STOP"
  btnRightElement.classList.replace("split","reset")
  btnRightElement.innerText = "SPLIT"
  chronometer.start()
  printTime()
}

function setResetBtn() {
  status_btn = 'running'
  btnRightElement.classList.replace("split","reset")
  btnRightElement.innerText = "SPLIT"
  clearSplits()
  chronometer.reset()
  printTime()
}

// Start/Stop Button
btnLeftElement.addEventListener("click", () => {
  if(status_btn == 'stopped'){
    setStartBtn()
  }
  else{
    setStopBtn()
  }  
});

// Reset/Split Button
btnRightElement.addEventListener("click", () => {
  if(status_btn == 'stopped'){
    setResetBtn()
  }
  else{
    setSplitBtn()
  }
  
});
