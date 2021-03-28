import { activeChallenge } from './challengeBox.js'

const expGreen = document.querySelector('[data-expGreen]')
const expNumber = document.querySelector('[data-expNumber ')
const expGoal = document.querySelector('[data-expGoal]')

const expLevel = document.querySelector('[data-level]')

const clgCompleted = document.querySelector('[data-challengeCompleted]')

let level = 1
let currentExperience = 0
let challengeCompleted = 0

let percentToNextLevel

let experienceToNextLevel = 64
function levelUp(){
  level++
  expLevel.innerHTML = `Level ${level}`
  experienceToNextLevel = Math.pow((level + 1) * 4,2)
}

export function completeChallenge(){
  if(!activeChallenge){
    return;
  }

  const { amount } = activeChallenge

  let finalExperience = currentExperience + amount
  console.log(finalExperience)

  if(finalExperience >= experienceToNextLevel){
    finalExperience = finalExperience - experienceToNextLevel
    console.log(finalExperience)
    levelUp()
  }

  currentExperience = finalExperience

  percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  challengeCompleted = challengeCompleted + 1

  clgCompleted.innerText = challengeCompleted
  expGoal.innerText = `${experienceToNextLevel} xp`
  expNumber.style.left = `${percentToNextLevel}%`
  expNumber.innerText = `${currentExperience} xp`
  expGreen.style.width = `${percentToNextLevel}%`

}