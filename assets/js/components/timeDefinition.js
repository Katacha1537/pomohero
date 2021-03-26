export const subMin = document.querySelector('[data-subMin]')
export const addMin = document.querySelector('[data-addMin]')
export const subRes = document.querySelector('[data-subRest]')
export const addRes = document.querySelector('[data-addRest]')

const minutes = document.querySelector('[data-minute]')
const rest = document.querySelector('[data-rest]')
let numberMinutes = Number(minutes.innerText)
let numberRest = Number(rest.innerText)

export function subtractMinutes(){
  numberMinutes--
  minutes.innerText = numberMinutes
}
export function addMinutes(){
  numberMinutes++
  minutes.innerText = numberMinutes
}
export function subtractRest(){
  numberRest--
  rest.innerText = numberRest
}
export function addRest(){
  numberRest++
  rest.innerText = numberRest
}