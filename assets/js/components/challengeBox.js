import challenges from '../challenges.js'
import { completeChallenge } from './experienceBar.js'

export const btnSucceeded = document.querySelector('[data-btnSucceeded]')
export const btnFailedButton = document.querySelector('[data-btnFailedButton]')

const waitChallenge = document.querySelector('[data-waitChallenge]')
const challeng = document.querySelector('[data-challenge]')
const btnInit = document.querySelector('[data-init]')

const amount = document.querySelector('[data-amount]')
const type = document.querySelector('[data-type]')
const description = document.querySelector('[data-description]')

let dataMinuteLeft= document.querySelector('[data-minuteLeft]')
let dataMinuteRight= document.querySelector('[data-minuteRight]')

export let activeChallenge

export function appearChallenge(){
  waitChallenge.classList.add('hiden')
  challeng.classList.remove('hiden')

  startNewChallenge()
}

function startNewChallenge(){
  const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
  activeChallenge = challenges[randomChallengeIndex]

  
  amount.innerText = `Ganhe ${activeChallenge.amount} px`
  type.src = `./assets/icons/body.svg`
  description.innerText = activeChallenge.description
  
  if (Notification.permission === "granted") {
    new Notification('Novo desafio! 🚀', {
      body: `Valendo ${activeChallenge.amount}xp!`
    })
  }
}

function resetChallenge(){
  waitChallenge.classList.remove('hiden')
  challeng.classList.add('hiden')
  btnInit.removeAttribute("disabled");
}

function resetCountDown(){
  let minutes = document.querySelector('[data-minute]')
  let numberMinutes = Number(minutes.innerText)
  minutes.innerText = numberMinutes
  let [ minLeft, minRight ] = minutes.innerText.padStart(2, '0').split('')
  dataMinuteLeft.innerText = minLeft
  dataMinuteRight.innerText = minRight
}

export function handleChallengeFailed(){
  resetChallenge()
  resetCountDown()
}

export function handleChallengeSucceeded(){
  resetChallenge()
  completeChallenge()
}