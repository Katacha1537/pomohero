const dataMinuteLeft= document.querySelector('[data-minuteLeft]')
const dataMinuteRight= document.querySelector('[data-minuteRight]')
const dataSecondLeft= document.querySelector('[data-secondLeft]')
const dataSecondRight= document.querySelector('[data-secondRight]')

export const btnInit= document.querySelector('[data-init]')

const minutes = document.querySelector('[data-minute]').innerText
const rest = document.querySelector('[data-rest]')

const [ minLeft, minRight ] = minutes.padStart(2, '0').split('')
let secondLeft, secondRight = 0

let minuteLeft = Number(minLeft) 
let minuteRight = Number(minRight)


export function iniciar(){
  console.log('iniciando')
  setInterval(() => {
    if(secondRight > 0){
      secondRight--
      dataSecondRight.innerText = `${secondRight}`
    }else if(secondRight = 0){
      secondLeft = 6
      dataSecondLeft.innerText = `${secondLeft}`
    }else if(secondLeft > 0){
      secondLeft--
      dataSecondLeft.innerText = `${secondLeft}`
    }else if(secondLeft = 0){
      minuteRight--
      dataMinuteRight.innerText = `${minuteRight}`
    }
  }, 1000)
}