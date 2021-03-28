import { completeChallenge } from './experienceBar.js'

const btnSucceeded = document.querySelector('[data-btnSucceeded]')
const btnFailedButton = document.querySelector('[data-btnFailedButton]')

const waitChallenge = document.querySelector('[data-waitChallenge]')
const challenge = document.querySelector('[data-challenge]')
const btnInite = document.querySelector('[data-init]')

let dataMinuteLeft= document.querySelector('[data-minuteLeft]')
let dataMinuteRight= document.querySelector('[data-minuteRight]')

function resetChallenge(){
  waitChallenge.classList.remove('hiden')
  challenge.classList.add('hiden')
  btnInite.removeAttribute("disabled");
}

function resetCountDown(){
  let minutes = document.querySelector('[data-minute]')
  let numberMinutes = Number(minutes.innerText)
  minutes.innerText = numberMinutes
  let [ minLeft, minRight ] = minutes.innerText.padStart(2, '0').split('')
  console.log('minLeft, min Right')
  dataMinuteLeft.innerText = minLeft
  dataMinuteRight.innerText = minRight
}

function handleChallengeFailed(){
  resetChallenge()
  resetCountDown()
}

function handleChallengeSucceeded(){
  resetChallenge()
  completeChallenge()
}

btnFailedButton.addEventListener('click', handleChallengeFailed)
btnSucceeded.addEventListener('click', handleChallengeSucceeded)