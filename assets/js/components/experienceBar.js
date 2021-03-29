import { activeChallenge } from './challengeBox.js'

const expGreen = document.querySelector('[data-expGreen]')
const expNumber = document.querySelector('[data-expNumber ')
const expGoal = document.querySelector('[data-expGoal]')

const expLevel = document.querySelector('[data-level]')

const clgCompleted = document.querySelector('[data-challengeCompleted]')

const modalNextLevel = document.querySelector('[data-nextLevel]')
const levelInfo = document.querySelector('[data-levelInfo]')
const challengeComp = document.querySelector('[data-challengeComp]')
const expTotal = document.querySelector('[data-expTotal]')
export const btnClose = document.querySelector('[data-btnClose]')


var audio = new Audio('./assets/js/chipquest.wav');

let level = 1
let currentExperience = 0
let challengeCompleted = 0

let percentToNextLevel

let experienceToNextLevel = 64

let experienceTotal = 0

let activeLevelUp = false
function levelUp(){
  level++
  expLevel.innerHTML = `Level ${level}`
  experienceToNextLevel = Math.pow((level + 1) * 4,2)
  appearModalNextLevel()
}

export function closeModalNextLevel(){
  modalNextLevel.classList.add('nextLevelHidden')
  activeLevelUp = false
}

function appearModalNextLevel(){
  audio.play()
  modalNextLevel.classList.remove('nextLevelHidden')
  levelInfo.innerText = level
  challengeComp.innerText = challengeCompleted
  expTotal.innerText = experienceTotal
}

export function completeChallenge(){
  if(!activeChallenge){
    return;
  }

  const { amount } = activeChallenge

  let finalExperience = currentExperience + amount

  experienceTotal = experienceTotal + amount

  if(finalExperience >= experienceToNextLevel){
    finalExperience = finalExperience - experienceToNextLevel
    console.log(finalExperience)
    activeLevelUp = true
  }

  currentExperience = finalExperience

  percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  challengeCompleted = challengeCompleted + 1

  if(activeLevelUp){
    levelUp()
  }
  
  clgCompleted.innerText = challengeCompleted
  expGoal.innerText = `${experienceToNextLevel} xp`
  expNumber.style.left = `${percentToNextLevel}%`
  expNumber.innerText = `${currentExperience} xp`
  expGreen.style.width = `${percentToNextLevel}%`

}