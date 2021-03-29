export const subMin = document.querySelector('[data-subMin]')
export const addMin = document.querySelector('[data-addMin]')

let minutes = document.querySelector('[data-minute]')

let dataMinuteLeft= document.querySelector('[data-minuteLeft]')
let dataMinuteRight= document.querySelector('[data-minuteRight]')

let numberMinutes = Number(minutes.innerText)

export function subtractMinutes(){
  if(numberMinutes >= 2){
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