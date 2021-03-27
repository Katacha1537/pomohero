import challenges from '../challenges.js'

const waitChallenge = document.querySelector('[data-waitChallenge]')
const challeng = document.querySelector('[data-challenge]')
const btnInit = document.querySelector('[data-init]')

const amount = document.querySelector('[data-amount]')
const type = document.querySelector('[data-type]')
const description = document.querySelector('[data-description]')

export function appearChallenge(){
  waitChallenge.classList.add('hiden')
  challeng.classList.remove('hiden')
  btnInit.setAttribute("disabled", "disabled");

  startNewChallenge()
}

function startNewChallenge(){
  const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
  const challenge = challenges[randomChallengeIndex]

  amount.innerText = `Ganhe ${challenge.amount} px`
  type.src = `./assets/icons/body.svg`
  description.innerText = challenge.description

  new Audio('../notification.mp3').play()

  if (Notification.permission === "granted") {
    new Notification('Novo desafio! 🚀', {
      body: `Valendo ${challenge.amount}xp!`
    })
  }
}

function handleChallengeSucceeded(){

}

