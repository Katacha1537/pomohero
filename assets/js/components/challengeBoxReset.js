const btnSucceeded = document.querySelector('[data-btnSucceeded]')
const btnFailedButton = document.querySelector('[data-btnFailedButton]')

const waitChallenge = document.querySelector('[data-waitChallenge]')
const challeng = document.querySelector('[data-challenge]')
const btnInite = document.querySelector('[data-init]')

function resetChallenge(){
  waitChallenge.classList.remove('hiden')
  challeng.classList.add('hiden')
  btnInite.removeAttribute("disabled");
}

export function handleChallengeFailed(){
  resetChallenge()
}