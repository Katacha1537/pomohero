const minuteLeft= document.querySelector('[data-minuteLeft]')
const minuteRight= document.querySelector('[data-minuteRight]')
const secondLeft= document.querySelector('[data-secondLeft]')
const secondRight= document.querySelector('[data-secondRight]')

const minutes = document.querySelector('[data-minute]')
const rest = document.querySelector('[data-rest]')

const [ minuteLeft, minuteRight ] = minutes.padStart(2, '0').split('')
const secondLeft, secondRight = "0"



function iniciar(){
  setInterval(() => {
    if(secondRight > 0){
      secondRight--
      secondRight.innerText = `${secondRight}`
    }else if(secondRight = 0){
      secondRight = 0
    }
  }, 1000)
}