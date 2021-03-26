import { btnDefinirNome, changeName } from './components/profile.js'
import { iniciar,btnInit } from './components/countdown.js'
import { 
  addMin, 
  addRes, 
  addMinutes, 
  addRest, 
  subtractMinutes,
  subtractRest,
  subMin,
  subRes } from './components/timeDefinition.js'

btnDefinirNome.addEventListener('click', changeName)

btnInit.addEventListener('click', iniciar)

addMin.addEventListener('click', addMinutes)
addRes.addEventListener('click', addRest)
subMin.addEventListener('click', subtractMinutes)
subRes.addEventListener('click', subtractRest)