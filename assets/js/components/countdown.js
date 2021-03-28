import { appearChallenge } from './challengeBox.js'

export const dataMinuteLeft= document.querySelector('[data-minuteLeft]')
export const dataMinuteRight= document.querySelector('[data-minuteRight]')
const dataSecondLeft= document.querySelector('[data-secondLeft]')
const dataSecondRight= document.querySelector('[data-secondRight]')
export const btnInit= document.querySelector('[data-init]')
const rest = document.querySelector('[data-rest]')

let defenite = false
let active = false
let setZero = true

let secondLeft = 6
let secondRight = 0

let minuteLeft
let minuteRight

export function iniciar(){
  defenite = true
  active = true  
  
  btnInit.setAttribute("disabled", "disabled");
}

setInterval(() => {
  if(defenite){
    let minutes = document.querySelector('[data-minute]')
    const [ minLeft, minRight ] = minutes.innerText.padStart(2, '0').split('')
    minuteLeft = Number(minLeft) 
    minuteRight = Number(minRight)
    console.log(minuteLeft, minuteRight)
    defenite = false
  }

  if(active == true && (minuteLeft >= 0 || minuteRight >= 0) && (secondLeft > 0 || secondRight >= 0)){
    secondRight--
    dataSecondRight.innerText = secondRight

    if(setZero){
      secondLeft = 0
      setZero = false
    }

    if(secondRight == -1){
      secondRight = 9
      secondLeft--
      console.log(minuteRight)

      dataSecondLeft.innerText = secondLeft
      dataSecondRight.innerText = secondRight
    }
    
    if(secondLeft == -1){
      secondLeft = 5
      minuteRight--
      console.log(minuteRight)

      dataSecondLeft.innerText = secondLeft
      dataMinuteRight.innerText = minuteRight
    }

    if(minuteRight == -1){
      if(minuteLeft > -1){
        minuteRight = 9
        minuteLeft--
      }

      dataMinuteRight.innerText = minuteRight
      dataMinuteLeft.innerText = minuteLeft
    }

    if(minuteLeft == 0 && minuteRight == 0 && secondLeft == 0 && secondRight == 0){
      active = false
      appearChallenge()
    }
  }
}, 1000)