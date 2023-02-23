class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.milisec = 0
  }

  start() {
    this.intervalId = setInterval(() => {
    this.currentTime++
    printTime()
  },1000)
  
    this.intervalId_milisec = setInterval(() => {
      if(this.milisec>=99){
        this.milisec = 0
      }
      else{
        this.milisec++
      }
      printTime()
    },10)
  }

  getMinutes() {
    this.minutes = (Math.floor(this.currentTime/60))
    return this.minutes
  }

  getSeconds() {
    this.seconds = (this.currentTime-(this.minutes*60))
    return this.seconds
  }

  getMiliseconds() {
    return this.milisec
  }

  computeTwoDigitNumber(value) {
   this.newvalue = value.toString()
   if(this.newvalue.length<=1){
    this.newvalue = `0${this.newvalue}`
   }
   return this.newvalue
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalId_milisec)
  }

  reset() {
    this.currentTime = 0
    this.milisec = 0
  }

  split() {
    this.min = this.computeTwoDigitNumber(this.minutes)
    this.sec = this.computeTwoDigitNumber(this.seconds)
    this.result_split = `${this.min}:${this.sec}`
    return this.result_split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

