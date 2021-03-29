import { btnDefinirNome, changeName, userName, appearModalName } from './components/profile.js'
import { iniciar,btnInit } from './components/countdown.js'
import { btnClose, closeModalNextLevel } from './components/experienceBar.js'
import { 
  btnFailedButton, 
  btnSucceeded, 
  handleChallengeFailed, 
  handleChallengeSucceeded } from './components/challengeBox.js'
import { 
  addMin, 
  addMinutes,
  subtractMinutes,
  subMin,} from './components/timeDefinition.js'
  
window.onload = function() {
  Notification.requestPermission()
};

btnDefinirNome.addEventListener('click', changeName)
userName.addEventListener('click', appearModalName)

btnInit.addEventListener('click', iniciar)

addMin.addEventListener('click', addMinutes)
subMin.addEventListener('click', subtractMinutes)

btnFailedButton.addEventListener('click', handleChallengeFailed)
btnSucceeded.addEventListener('click', handleChallengeSucceeded)

btnClose.addEventListener('click', closeModalNextLevel)