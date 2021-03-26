export const subMin = document.querySelector('[data-subMin]')
export const addMin = document.querySelector('[data-addMin]')
export const subRes = document.querySelector('[data-subRest]')
export const addRes = document.querySelector('[data-addRest]')

let minutes = document.querySelector('[data-minute]')

let dataMinuteLeft= document.querySelector('[data-minuteLeft]')
let dataMinuteRight= document.querySelector('[data-minuteRight]')

const rest = document.querySelector('[data-rest]')

let numberMinutes = Number(minutes.innerText)
let numberRest = Number(rest.innerText)

export function subtractMinutes(){
  if(numberMinutes > 0){
    numberMinutes--
    minutes.innerText = numberMinutes
    let [ minLeft, minRight ] = minutes.innerText.padStart(2, '0').split('')
    dataMinuteLeft.innerText = minLeft
    dataMinuteRight.innerText = minRight
  }
}
export function addMinutes(){
  if(numberMinutes <  60){
    numberMinutes++
    minutes.innerText = numberMinutes
    let [ minLeft, minRight ] = minutes.innerText.padStart(2, '0').split('')
    dataMinuteLeft.innerText = minLeft
    dataMinuteRight.innerText = minRight
  }
  
}
export function subtractRest(){
  numberRest--
  rest.innerText = numberRest
}
export function addRest(){
  numberRest++
  rest.innerText = numberRest
}