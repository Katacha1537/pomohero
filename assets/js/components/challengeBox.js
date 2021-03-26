const waitChallenge = document.querySelector('[data-waitChallenge]')
const challenge = document.querySelector('[data-challenge]')
const btnInit = document.querySelector('[data-init]')

export function appearChallenge(){
  waitChallenge.classList.add('hiden')
  challenge.classList.remove('hiden')
  btnInit.setAttribute("disabled", "disabled");
}